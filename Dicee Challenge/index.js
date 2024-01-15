var random = Math.random();
var randomNumber1 = Math.floor(random * 6) + 1;
var randomImage1 = "dice" + randomNumber1 + ".png";
var randomImageSrc1 = "images/" + randomImage1;
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImageSrc1);

var random2 = Math.random();
var randomNumber2 = Math.floor(random2 * 6) + 1;
var randomImage2 = "dice" + randomNumber2 + ".png";
var randomImageSrc2 = "images/" + randomImage2;
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomImageSrc2);

if (random > random2) {
  document.querySelector(".heading").textContent = "Player 1 has won";
} else {
  if (random == random2) {
    document.querySelector(".heading").textContent = "OOPS It's a tie.";
  } else {
    document.querySelector(".heading").textContent = "Player 2 has won.";
  }
}
