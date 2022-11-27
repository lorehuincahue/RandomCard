import "bootstrap";
import "./style.css";

let card = document.querySelector(".card");
let arriba = document.querySelector(".arriba");
let numero = document.querySelector(".numero");
let abajo = document.querySelector(".abajo");

let pintas = RandomPinta();

if (pintas == "♥" || pintas == "♦") {
  arriba.style.color = "red";
}

if (pintas == "♥" || pintas == "♦") {
  abajo.style.color = "red";
}

numero.innerHTML = RandomNumber();
arriba.innerHTML = pintas;
abajo.innerHTML = pintas;

let RandomNumber = function() {
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
  let indexNumeros = Math.floor(Math.random() * numeros.length);
  return numeros[indexNumeros];
};

let RandomPinta = function() {
  let pintascartas = ["♥", "♠", "♣", "♦️"];
  let indexPinta = Math.floor(Math.random() * pintascartas.length);

  return pintascartas[indexPinta];
};
