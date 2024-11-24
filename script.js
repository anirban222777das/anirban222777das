// Array of fun facts
const funFacts = [
  "The first computer virus was created in 1983.",
  "Did you know? A day on Venus is longer than a year on Venus.",
  "The first website ever created is still online! It's a basic HTML page from 1991.",
  "The world’s largest digital billboard is located in Times Square, New York.",
  "The longest space flight ever was by Valeri Polyakov, lasting 437 days.",
  "The first video game ever created was 'Tennis for Two' in 1958.",
  "One byte is made up of 8 bits.",
  "You can use GitHub's interface to create your own markdown files and documents easily."
];

// Function to generate random fun fact
function generateRandomFunFact() {
  const randomFact = funFacts[Math.floor(Math.random() * funFacts.length)];
  document.getElementById("fun-fact").innerHTML = `> "${randomFact}"`;
}

// Generate a fun fact on page load
window.onload = generateRandomFunFact;
