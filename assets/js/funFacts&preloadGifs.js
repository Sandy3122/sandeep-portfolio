const funFacts = [
  "The world's largest desert is not the Sahara, but Antarctica. 🌍❄️",
  "The Eiffel Tower can be 15 cm taller during the summer due to the expansion of the iron in the heat. 🔥🗼",
  "A bolt of lightning is six times hotter than the sun. ⚡☀️",
  "Cleopatra was Greek, not Egyptian. 👸🇪🇬",
  "Hippopotamus milk is pink. 🦛🥛",
  "A shrimp's heart is located in its head. 🍤❤️",
  "A group of crows is called a 'murder.' 🦅💀",
  "The world's largest ocean is the Pacific Ocean, covering more area than all the landmasses on Earth combined. 🌊🌍",
  "The world's largest volcano is Mauna Loa in Hawaii. It rises over 30,000 feet from its base, and its last eruption was in 1984. 🌋🏝️",
  "Polar bears are left-handed. 🐻🖐️",
  "The longest hiccuping spree lasted 68 years! 😲",
  "The honeybee is the only insect that produces food we eat. 🐝🍯",
  "Giraffes have the same number of neck vertebrae as humans, but they are much larger. 🦒🦴",
  "The total weight of ants on Earth is estimated to be equal to or greater than the total weight of all humans on Earth. 🐜🌍",
  "A group of owls is called a 'parliament.' 🦉🏛️",
  "The smell of freshly-cut grass is a plant distress call. 🌱🌾",
  "Sloths only poop once a week. 💩🦥",
  "A day on Mercury is longer than its year. It takes 59 Earth days to rotate once on its axis but 88 Earth days to orbit the sun. ☀️🪐",
  "The longest word in the English language without a vowel is 'rhythms.' 📚",
  "A single strand of spaghetti is called a 'spaghetto.' 🍝",
  "The electric chair was invented by a dentist. 😬",
  "Oysters can change their gender depending on environmental conditions. 🦪⚥",
  "The longest recorded flight of a chicken is 13 seconds. 🐔✈️",
  "The world's smallest mammal is the bumblebee bat. 🦇🌍",
  "A group of pugs is called a 'grumble.' 🐶🤣",
  "Cats have a unique grooming pattern, always starting with licking their lips. 🐱👅",
  "A day on Venus is longer than its year. It takes 243 Earth days to rotate once on its axis but only 225 Earth days to orbit the sun. 🌞🪐",
  "The average person will spend six months of their life waiting for red lights to turn green. 🚦⏳",
  "In Switzerland, it is illegal to own just one guinea pig because they are prone to loneliness. 🇨🇭🐹",
  "The tongue of a blue whale can weigh as much as an elephant. 🐋👅🐘",
  "Antarctica is the windiest, driest, and coldest continent on Earth. ❄️🌬️🌎",
  "Penguins are excellent swimmers, but they can't fly. 🐧❌✈️",
  "The average person will spend six months of their life waiting for red lights to turn green. 🚦⏳",
  "In Switzerland, it is illegal to own just one guinea pig because they are prone to loneliness. 🇨🇭🐹",
  "The longest recorded flight of a chicken is 13 seconds. 🐔✈️",
  "The world's smallest mammal is the bumblebee bat. 🦇🌍",
  "Sloths only poop once a week. 💩🦥",
  "Polar bears are left-handed. 🐻🖐️",
  "A group of pugs is called a 'grumble.' 🐶🤣",
  "A day on Mercury is longer than its year. It takes 59 Earth days to rotate once on its axis but 88 Earth days to orbit the sun. ☀️🪐",
  "The honeybee is the only insect that produces food we eat. 🐝🍯",
  "Giraffes have the same number of neck vertebrae as humans, but they are much larger. 🦒🦴",
  "The total weight of ants on Earth is estimated to be equal to or greater than the total weight of all humans on Earth. 🐜🌍",
  "A group of owls is called a 'parliament.' 🦉🏛️",
  "The smell of freshly-cut grass is a plant distress call. 🌱🌾",
  "Polar bears are left-handed. 🐻🖐️",
  "A day on Mercury is longer than its year. It takes 59 Earth days to rotate once on its axis but 88 Earth days to orbit the sun. ☀️🪐",
  "The honeybee is the only insect that produces food we eat. 🐝🍯",
  "Giraffes have the same number of neck vertebrae as humans, but they are much larger. 🦒🦴",
];

const thoughtElement = document.getElementById("thought-of-the-day");

        function getRandomThought() {
            const randomIndex = Math.floor(Math.random() * funFacts.length);
            return funFacts[randomIndex];
        }

        function getRandomColor() {
            const letters = "0123456789ABCDEF";
            let color = "#";
            for (let i = 0; i < 6; i++) {
                color += letters[Math.floor(Math.random() * 16)];
            }
            return color;
        }

        function updateThoughtAndColor() {
            const randomThought = getRandomThought();
            const randomColor = getRandomColor();
            thoughtElement.textContent = randomThought;
            thoughtElement.style.color = randomColor;
        }

        // Initial update
        updateThoughtAndColor();

        // Set interval to update thought and color every 10 seconds
        setInterval(updateThoughtAndColor, 10000);


// Fun Facts
// Preload GIFs
function preloadGIFs() {
  var gifElements = document.querySelectorAll(".item img");
  gifElements.forEach(function (gif) {
    var src = gif.getAttribute("src");
    var image = new Image();
    image.src = src;
  });
}

// Call the preloadGIFs function when the page is fully loaded
window.addEventListener("load", preloadGIFs);
