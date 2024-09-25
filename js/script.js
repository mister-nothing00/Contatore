const incrementaBtn = document.querySelector(".incrementa");
const decrementaBtn = document.querySelector(".decrementa");
const contatore = document.querySelector(".contatore");
let numero = 0;

function incrementaNum() {
  numero++;
  aggiornaNum();
}

function decrementaNum() {
  numero--;
  aggiornaNum();
}

function aggiornaNum() {
  contatore.textContent = numero;
}


console.log('JavaScript caricato correttamente');

incrementaBtn.addEventListener('click', incrementaNum);
decrementaBtn.addEventListener('click', decrementaNum);
