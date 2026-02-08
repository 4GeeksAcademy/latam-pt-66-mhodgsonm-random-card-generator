import "bootstrap";
import "./style.css";

window.onload = function () {
  let palos = [
    { name: "heart", symbol: "♥" },
    { name: "diamond", symbol: "♦" },
    { name: "spade", symbol: "♠" },
    { name: "club", symbol: "♣" }
  ];

  let valores = ["A","2","3","4","5","6","7","8","9","10","J","Q","K"];

  function generarCarta() {
    let palo = palos[Math.floor(Math.random() * palos.length)];
    let valor = valores[Math.floor(Math.random() * valores.length)];

    let cardContainer = document.getElementById("card-container");

    cardContainer.innerHTML = `
      <div class="card ${palo.name}">
        <div class="corner top">
          <span>${valor}</span>
          <span>${palo.symbol}</span>
        </div>

        <div class="center">${palo.symbol}</div>

        <div class="corner bottom">
          <span>${valor}</span>
          <span>${palo.symbol}</span>
        </div>
      </div>
    `;
  }

  // Generar carta al cargar
  generarCarta();

  // Botón para generar nueva carta
  document.getElementById("new-card-btn").addEventListener("click", generarCarta);
};