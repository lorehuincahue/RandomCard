/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = function() {
  document.querySelector(".card").classList.add(generateRandomPintas());
  document.querySelector(".card").innerHTML = generateRandomNumber();
};
let generateRandomNumber = function() {
  let numeros = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];
  let indexNum = Math.floor(Math.random() * numeros.length);
  return numeros[indexNum];
};

let generateRandomPintas = function() {
  let pintascards = ["♥", "♠", "♣", "♦️"];
  let indexPinta = Math.floor(Math.random() * pintascards.length);
  return pintascards[indexPinta];
};
