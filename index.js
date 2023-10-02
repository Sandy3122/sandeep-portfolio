const express = require('express');
const bodyParser = require('body-parser');
const path = require("path");
const mongoose = require("mongoose");
const multer = require('multer');
const cors = require('cors');
const dotenv = require('dotenv');
const nodemailer = require('nodemailer');
const twilio = require('twilio');


dotenv.config(); // To Access The Env Variables

const app = express();
const port = process.env.PORT || 8000;

// Middleware to parse JSON in the request body
app.use(bodyParser.json());

// Use the cors middleware
app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


// Configure multer to store uploaded files in a specific folder
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  },
});

const upload = multer({ storage: storage });

// Serve static assets (CSS, JavaScript, images, etc.) directly from their respective directories
app.use(express.static(path.join(__dirname, 'assets/css')));
app.use(express.static(path.join(__dirname, 'assets/fonts')));
app.use(express.static(path.join(__dirname, 'images')));
app.use(express.static(path.join(__dirname, 'assets/js')));
app.use(express.static(path.join(__dirname, 'assets/preview')));
app.use(express.static(path.join(__dirname, 'assets/resume')));
app.use('/uploads', express.static('uploads'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

// MongoDB Connection
const mongoUrl = process.env.MONGOURL;
mongoose.connect(mongoUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log("Successfully Connected To MongoDB Database.");
}).catch((e) => {
  console.log("Not Connected To MongoDB Database.");
});

// Testimonial Schema
const testimonialSchema = new mongoose.Schema({
  text: String,
  author: String,
  firm: String,
  imageUrl: String,
});

// Testimonial Model
const Testimonial = mongoose.model("Testimonial", testimonialSchema);

// Route to handle form submission
app.post('/submit-testimonial', async (req, res) => {
  try {
    const { text, author, firm, imageUrl } = req.body;

    // Create a new testimonial document
    const testimonial = new Testimonial({
      text,
      author,
      firm,
      imageUrl,
    });

    // Save the testimonial to the database
    await testimonial.save();

    res.status(201).json({ message: 'Testimonial submitted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error submitting testimonial' });
  }
});

// Route to handle image uploads
app.post('/upload-image', upload.single('image'), (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: 'No file uploaded' });
    }

    const imageUrl = `/uploads/${req.file.filename}`;
    res.status(200).json(imageUrl);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error uploading image' });
  }
});

// Route to get testimonials from the database and send them as JSON
app.get('/get-testimonials', async (req, res) => {
  try {
    const testimonials = await Testimonial.find({});
    res.json(testimonials); // Send the testimonials as JSON
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error fetching testimonials' });
  }
});

// Nodemailer setup for sending emails
const transporter = nodemailer.createTransport({
  service: 'Gmail', // e.g., 'Gmail'
  auth: {
    user: 'arjunreddyseeram87@gmail.com',
    pass: 'jqkbynjkazoltcho',
  },
});

// Route to send email
app.post('/send-email', (req, res) => {
  try {
    console.log(req.body);
    const { name, email, message } = req.body;

    // Compose email
    const mailOptions = {
      from: email,
      to: 'arjunreddyseeram87@gmail.com', // Change this to the recipient's email address
      subject: `Portfolio, Contact Form Submission From ${name}`,
      replyTo: email,
      html: `
      <!DOCTYPE html>
<html>

<head>
  <!-- Add Bootstrap CSS (you can link to a hosted version or use a local copy) -->
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
  <style>
    /* Add your custom CSS styles here */
    body {
      background-color: #f5f5f5;
    }

    .card {
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
      transition: 0.3s;
      border: none;
    }

    .card:hover {
      box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
    }

    .card-header {
      background-color: #007bff;
      color: white;
      font-size: 24px;
      font-weight: bold;
      text-align: center;
      padding: 20px;
      border-radius: 0;
    }

    .card-body {
      background-color: #ffffff;
      border-radius: 5px;
    }

    .card-title {
      font-size: 20px;
      font-weight: bold;
    }

    .card-text {
      font-size: 16px;
      line-height: 1.5;
    }
  </style>
</head>

<body>
  <div class="container mt-4">
    <div class="card">
      <h5 class="card-header">Contact Form Submission</h5>
      <div class="card-body">
        <h5 class="card-title">Contact Details</h5>
        <p class="card-text"><strong>Name:</strong> ${name}</p>
        <p class="card-text"><strong>Email:</strong> ${email}</p>
        <p class="card-text"><strong>Message:</strong> ${message}</p>
      </div>
    </div>
  </div>

  <!-- Add Bootstrap JS and jQuery (if needed) -->
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
</body>

</html>

    `,
    };

    // Send email
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error('Error sending email:', error);
        res.status(500).json({ message: 'Error sending email' });
      } else {
        console.log('Email sent: ' + info.response);
        res.status(201).json({ message: 'Email sent successfully' });
      }
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error sending email' });
  }
});


// Twilio credentials
const accountSid = 'AC6ccab09b5721535ee336616c1f9e6bda';
const authToken = '22f2fcc6205254b6a51124b6be1caec4';
const twilioPhoneNumber = '+12565988773';

const client = twilio(accountSid, authToken);

app.post('/send-sms', async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // Compose the SMS message
    const smsMessage = `

  🌟 New Inquiry from Your Portfolio 🌟

  Hello Seeram Sandeep,

  Please review the inquiry and reach out as soon as feasible.

  -----------------------
  Message Details:
  -----------------------
  Name: ${name}
  Email: ${email}
  Message:
  ${message}
  -----------------------

  📈 Your Portfolio Management
`;

    // Send SMS
    const sms = await client.messages.create({
      body: smsMessage,
      from: twilioPhoneNumber,
      to: '+917989175345', // Replace with the recipient's phone number
    });

    console.log(`SMS sent with SID: ${sms.sid}`);
    res.status(200).json({ message: 'SMS sent successfully' });
  } catch (error) {
    console.error('Error sending SMS:', error);
    res.status(500).json({ message: 'Error sending SMS' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});