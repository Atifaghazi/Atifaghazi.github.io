/*  Name: Atifa Ghazi
    File: main.js
    Date: 19 March 2026
    JavaScript for Object building practice generating a Bouncing balls! - lab 4 part 3 page
 */


const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
const width = (canvas.width = window.innerWidth);
const height = (canvas.height = window.innerHeight);

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


