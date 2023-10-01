const thoughts = [
  "Why do we press harder on the remote control when we know the batteries are weak?",
  "If swimming is so good for your figure, how do you explain whales?",
  "I put my phone in airplane mode, but it didn't fly.",
  "The early bird might get the worm, but the second mouse gets the cheese.",
  "Do twins ever realize that one of them is unplanned?",
  "Why isn't 'phonetically' spelled the way it sounds?",
  "Why are they called apartments when they're all stuck together?",
  "If money doesn't grow on trees, why do banks have branches?",
  "Why does your nose run and your feet smell?",
  "Why do 'overlook' and 'oversee' mean opposite things?",
  "Why doesn't glue stick to the inside of the bottle?",
  "The longer you wait in a drive-thru, the hungrier you get.",
  "Can February March? No, but April May!",
  "I'm reading a book on anti-gravity - it's impossible to put down.",
  "I used to play piano by ear, but now I use my hands.",
  "I used to be a baker, but I couldn't make enough dough.",
  "I'm on a whiskey diet. I've lost three days already.",
  "I told my wife she was drawing her eyebrows too high. She looked surprised.",
  "I'm writing a book. I've got the page numbers done.",
  "I'm reading a book about anti-gravity. It's impossible to put down!",
  "If you see a crime at an Apple Store, does that make you an iWitness?",
  "I'm friends with all electricians. We have such great current connections.",
  "I got a job at a bakery because I kneaded dough.",
  "I used to be a baker, but I couldn't make enough dough.",
  "I have a joke about construction, but I'm still working on it.",
  "Why do cows have hooves instead of feet? Because they lactose.",
  "Why can't you give Elsa from Frozen a balloon? Because she will let it go!",
  "I'm on a seafood diet. I see food, and I eat it.",
  "I asked the librarian if the library had any books on paranoia. She whispered, 'They're right behind you!'",
  "Parallel lines have so much in common. It's a shame they'll never meet.",
  "I used to play piano by ear, but now I use my hands.",
  "I couldn't figure out why the baseball kept getting larger. Then it hit me.",
  "I'm reading a book on anti-gravity. It's impossible to put down.",
  "I'd tell you a joke about the construction, but I'm still working on it.",
  "I'm friends with all electricians. We have such great current connections.",
  "I got a job at a bakery because I kneaded dough.",
  "I used to be a baker, but I couldn't make enough dough.",
  "I have a joke about construction, but I'm still working on it.",
  "Why do cows have hooves instead of feet? Because they lactose.",
  "Why can't you give Elsa from Frozen a balloon? Because she will let it go!",
  "I'm on a seafood diet. I see food, and I eat it.",
  "I asked the librarian if the library had any books on paranoia. She whispered, 'They're right behind you!'",
  "Parallel lines have so much in common. It's a shame they'll never meet.",
  "I used to play piano by ear, but now I use my hands.",
  "I couldn't figure out why the baseball kept getting larger. Then it hit me.",
  "I'm reading a book on anti-gravity. It's impossible to put down!",
  "I'd tell you a joke about the construction, but I'm still working on it.",
  "I'm friends with all electricians. We have such great current connections.",
  "I got a job at a bakery because I kneaded dough.",
  "I used to be a baker, but I couldn't make enough dough.",
  "I have a joke about construction, but I'm still working on it.",
  "Why do cows have hooves instead of feet? Because they lactose.",
  "Why can't you give Elsa from Frozen a balloon? Because she will let it go!",
  "I'm on a seafood diet. I see food, and I eat it.",
  "I asked the librarian if the library had any books on paranoia. She whispered, 'They're right behind you!'",
  "Parallel lines have so much in common. It's a shame they'll never meet.",
  "I used to play piano by ear, but now I use my hands.",
  "I couldn't figure out why the baseball kept getting larger. Then it hit me.",
  "I'm reading a book on anti-gravity. It's impossible to put down!",
  "I'd tell you a joke about the construction, but I'm still working on it.",
  "I'm friends with all electricians. We have such great current connections.",
  "I got a job at a bakery because I kneaded dough.",
  "I used to be a baker, but I couldn't make enough dough.",
  "I have a joke about construction, but I'm still working on it.",
  "Why do cows have hooves instead of feet? Because they lactose.",
  "Why can't you give Elsa from Frozen a balloon? Because she will let it go!",
  "I'm on a seafood diet. I see food, and I eat it.",
  "I asked the librarian if the library had any books on paranoia. She whispered, 'They're right behind you!'",
  "Parallel lines have so much in common. It's a shame they'll never meet.",
  "I used to play piano by ear, but now I use my hands.",
  "I couldn't figure out why the baseball kept getting larger. Then it hit me.",
  "I'm reading a book on anti-gravity. It's impossible to put down!",
  "I'd tell you a joke about the construction, but I'm still working on it.",
  "I'm friends with all electricians. We have such great current connections.",
  "I got a job at a bakery because I kneaded dough.",
  "I used to be a baker, but I couldn't make enough dough.",
  "I have a joke about construction, but I'm still working on it.",
  "Why do cows have hooves instead of feet? Because they lactose.",
  "Why can't you give Elsa from Frozen a balloon? Because she will let it go!",
  "I'm on a seafood diet. I see food, and I eat it.",
  "I asked the librarian if the library had any books on paranoia. She whispered, 'They're right behind you!'",
  "Parallel lines have so much in common. It's a shame they'll never meet.",
  "I used to play piano by ear, but now I use my hands.",
  "I couldn't figure out why the baseball kept getting larger. Then it hit me.",
  "I'm reading a book on anti-gravity. It's impossible to put down!",
  "I'd tell you a joke about the construction, but I'm still working on it.",
  "I'm friends with all electricians. We have such great current connections.",
  "I got a job at a bakery because I kneaded dough.",
  "I used to be a baker, but I couldn't make enough dough.",
  "I have a joke about construction, but I'm still working on it.",
  "Why do cows have hooves instead of feet? Because they lactose.",
  "Why can't you give Elsa from Frozen a balloon? Because she will let it go!",
  "I'm on a seafood diet. I see food, and I eat it.",
  "I asked the librarian if the library had any books on paranoia. She whispered, 'They're right behind you!'",
  "Parallel lines have so much in common. It's a shame they'll never meet.",
  "I used to play piano by ear, but now I use my hands.",
  "I couldn't figure out why the baseball kept getting larger. Then it hit me.",
  "I'm reading a book on anti-gravity. It's impossible to put down!",
  "I'd tell you a joke about the construction, but I'm still working on it.",
  "I'm friends with all electricians. We have such great current connections.",
  "I got a job at a bakery because I kneaded dough.",
  "I used to be a baker, but I couldn't make enough dough.",
  "I have a joke about construction, but I'm still working on it.",
  "Why do cows have hooves instead of feet? Because they lactose.",
  "Why can't you give Elsa from Frozen a balloon? Because she will let it go!",
  "I'm on a seafood diet. I see food, and I eat it.",
  "I asked the librarian if the library had any books on paranoia. She whispered, 'They're right behind you!'",
  "Parallel lines have so much in common. It's a shame they'll never meet.",
];


const thoughtElement = document.getElementById("thought-of-the-day");

function getRandomThought() {
  const randomIndex = Math.floor(Math.random() * thoughts.length);
  return thoughts[randomIndex];
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
