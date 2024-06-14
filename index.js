

let counterValue = 0;
const counterElement = document.getElementById('counter');
const incrementButton = document.getElementById('incrementa');
const decrementButton = document.getElementById('decrementa');

//Per Incrementare

function incrementCounter() {
    counterValue++;
    updateCounter();
}

//Per Decrementare

function decrementCounter() {
    counterValue--;
    updateCounter();
}

//Per Aggiornare

function updateCounter() {
    counterElement.textContent = counterValue;
}

//Ascolto dei pulsanti

incrementButton.addEventListener('click', incrementCounter);
decrementButton.addEventListener('click', decrementCounter);