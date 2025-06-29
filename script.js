/* 
  What this app does:
  -------------------
  - Waits for the user to click the button
  - Picks a random compliment from a list
  - Displays the compliment inside the page
  - Adds a random image above the compliment to keep it fun
    (example image source: https://picsum.photos/600/400)
*/

// 1. Get the button and output area from the HTML
const generateBtn = document.getElementById("generate-btn");
const output = document.getElementById("output-container");

// 2. Create a list of compliments to choose from
const compliments = [
  "You are amazing!",
  "Your smile lights up the room.",
  "You have a great sense of humor.",
  "You are incredibly talented.",
  "You make the world a better place.",
  "Your kindness is contagious.",
  "You are a ray of sunshine.",
  "You inspire those around you.",
  "You have a heart of gold.",
  "You are a true friend.",
];

// 3. Listen for a button click
generateBtn.addEventListener("click", () => {
  console.log("Button clicked! Generating a compliment...");
  // 4. Pick a compliment at random
  const randomIndex = Math.floor(Math.random() * compliments.length);
  const randomCompliment = compliments[randomIndex];

  // 5. Update the page with the compliment and a random image
  output.innerHTML = `
  <img src="https://picsum.photos/600/400" alt="Random Image" />
  <p>${randomCompliment}</p>
  `;
});
