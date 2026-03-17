/*  Name: Atifa Ghazi
    File: style.js
    Date: 16 March 2026
    JavaScript for generating a random silly story! - lab 4 part 1 page
 */

// Complete variable definitions and random functions
// alert("In JS file");
const customName = document.getElementById("custom-name");
const generateBtn = document.querySelector(".generate");
const story = document.querySelector(".story");

function randomValueFromArray(array) {
  const random = Math.floor(Math.random() * array.length);
  return array[random];
}

// Raw text strings

const insertX = ["Willy the Goblin", "Big Daddy", "Father Christmas"];
const insertY = ["the soup kitchen", "Disneyland", "the White House"];
const insertZ = ["spontaneously combusted", "melted into a puddle on the sidewalk", "turned into a slug and slithered away"];

// Partial return random string function

function returnRandomStoryString() {

  const storyText = `It was 94 fahrenheit outside, so :insertx: went for a walk. 
When they got to :inserty:, they stared in horror for a few moments, 
then :insertz:. Bob saw the whole thing, but was not surprised — 
:insertx: weighs 300 pounds, and it was a hot day.`;

  return storyText;
}

// Event listener and partial generate function definition

generateBtn.addEventListener("click", generateStory);

function generateStory() {
  let newStory = returnRandomStoryString();

  const xItem = randomValueFromArray(insertX);
  const yItem = randomValueFromArray(insertY);
  const zItem = randomValueFromArray(insertZ);

  newStory = newStory.replaceAll(":insertx:", xItem);
  newStory = newStory.replaceAll(":inserty:", yItem);
  newStory = newStory.replaceAll(":insertz:", zItem);

  if (customName.value !== "") {
    const name = customName.value;
    newStory = newStory.replace("Bob", name);
  }

  if (document.getElementById("uk").checked) {
    const weight = Math.round(300 / 14) + " stones";
    const temperature = Math.round((94 - 32) * 5 / 9) + " centigrade";
    newStory = newStory.replaceAll("300 pounds", weight);
    newStory = newStory.replaceAll("94 fahrenheit", temperature);
  }

  // TODO: replace "" with the correct expression
  story.textContent = newStory;
  story.style.visibility = "visible";
}
