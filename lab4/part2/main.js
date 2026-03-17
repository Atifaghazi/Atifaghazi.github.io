/*  Name: Atifa Ghazi
    File: main.js
    Date: 17 March 2026
    JavaScript for generating a Image gallery! - lab 4 part 2 page
 */

const displayedImage = document.querySelector(".displayed-img");
const thumbBar = document.querySelector(".thumb-bar");

const btn = document.querySelector("button");
const overlay = document.querySelector(".overlay");

const images = [
  { filename: "pic1.jpg", alt: "Closeup of a human eye" },
  { filename: "pic2.jpg", alt: "Rock that looks like a wave" },
  { filename: "pic3.jpg", alt: "Purple and white pansies" },
  { filename: "pic4.jpg", alt: "Section of wall from a pharaoh's tomb" },
  { filename: "pic5.jpg", alt: "Large moth on a leaf" },
];

for (const image of images) {
  const newImage = document.createElement("img");

newImage.setAttribute("src", `images/${image.filename}`);
  newImage.setAttribute("alt", image.alt);

thumbBar.appendChild(newImage);

newImage.addEventListener("click", (e) => {
    displayedImage.src = e.target.src;
    displayedImage.alt = e.target.alt;
  });
}

btn.addEventListener("click", () => {
    const btnClass = btn.getAttribute("class");
