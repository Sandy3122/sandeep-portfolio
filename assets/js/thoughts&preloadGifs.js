const thoughtsOfTheDay = [
  "Why is Monday so far from Friday, and Friday so near to Monday?",
  "Life is short, smile while you still have teeth.",
  "The early bird might get the worm, but the second mouse gets the cheese.",
  "If you think you are too small to make a difference, try sleeping with a mosquito.",
  "If Plan A fails, remember there are 25 more letters.",
  "The road to success is dotted with many tempting parking spaces.",
  "The best time to plant a tree was 20 years ago. The second best time is now.",
  "The only time success comes before work is in the dictionary.",
  "Even if you're on the right track, you'll get run over if you just sit there.",
  "Your future self is watching you right now through your memories.",
  "Opportunity does not knock, it presents itself when you beat down the door.",
  "Every time you subtract negative from your life, you make room for more positive.",
  "If you're going to be thinking anyway, think big!",
  "The best way to cheer yourself up is to try to cheer somebody else up.",
  "You can't have everything... where would you put it?",
  "Age is of no importance unless you’re a cheese.",
  "When life gives you melons, you might be dyslexic.",
  "Happiness is an inside job.",
  "If you think nobody cares if you’re alive, try missing a couple of car payments.",
  "People often say that motivation doesn’t last. Well, neither does bathing. That’s why we recommend it daily.",
  "If you're hotter than me, then that means I'm cooler than you.",
  "I never make the same mistake twice. I make it three four times, you know, just to be sure.",
  "The elevator to success is out of order. You’ll have to use the stairs, one step at a time.",
  "A clear conscience is a sure sign of a bad memory.",
  "I'm on a seafood diet. I see food, and I eat it.",
  "If you think you're too small to be effective, you have never been in the dark with a mosquito.",
  "It's okay if you don't like me. Not everyone has good taste.",
  "I'm on a whiskey diet. I've lost three days already.",
  "If you stumble, make it part of the dance.",
  "A diamond is merely a lump of coal that did well under pressure.",
  "Remember, if the world didn't suck, we'd all fall off.",
  "The shinbone is a device for finding furniture in a dark room.",
  "If you can’t live without me, why aren’t you dead already?",
  "I’m great in bed; I can sleep for days.",
  "Every time you feel yourself being pulled into other people’s drama, repeat these words: Not my circus, not my monkeys.",
  "The best way to predict the future is to create it.",
  "Hard work beats talent when talent doesn’t work hard.",
  "Knowledge is like underwear. It is useful to have it, but not necessary to show it off.",
  "The best part about procrastination is that you are never bored because you have all kinds of things that you should be doing.",
  "If the grass is greener on the other side, you can bet the water bill is higher.",
  "Some days you're the bug; some days you're the windshield.",
  "Life is what happens when you're busy making other plans.",
  "If you're gonna make a mistake, do it with flair.",
  "There are two rules in life. 1) Never give out all the information.",
  "The more you weigh, the harder you are to kidnap. Stay safe, eat cake.",
  "Every pizza is a personal pizza if you try hard and believe in yourself.",
  "I used to think I was indecisive, but now I'm not so sure.",
  "I'm reading a book on anti-gravity. It's impossible to put down!",
  "Always remember you're unique, just like everyone else.",
  "The world is full of magical things patiently waiting for our wits to grow sharper.",
  "The secret of getting ahead is getting started.",
  "Don’t watch the clock; do what it does. Keep going.",
  "Life is 10% what happens to us and 90% how we react to it.",
  "The sun himself is weak when he first rises, and gathers strength and courage as the day gets on.",
  "Opportunities don't happen. You create them.",
  "It always seems impossible until it's done.",
  "It's not about how hard you hit. It's about how hard you can get hit and keep moving forward.",
  "The only difference between ordinary and extraordinary is that little extra.",
  "The road to success and the road to failure are almost exactly the same.",
  "Don’t count the days, make the days count.",
  "Dream big and dare to fail.",
  "The future belongs to those who believe in the beauty of their dreams."
];

const thoughtElement = document.getElementById("thought-of-the-day");

function getRandomThought() {
  const randomIndex = Math.floor(Math.random() * thoughtOfTheDay.length);
  return thoughtOfTheDay[randomIndex];
}

thoughtElement.textContent = getRandomThought();


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
