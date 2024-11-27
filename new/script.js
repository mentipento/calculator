
const maxInputLength = 12;
let currentNumber = "0";
let previousNumber = "";
let operator = "";
let resultCalculated = false;

function updateDisplay(number) {
    // regex removes leading "0"s unless a decimal point follows
    document.querySelector("#display").textContent = number.replace(/^0+(?=\d)/, "");
}

// Number buttons (including decimal .)

const numbers = document.querySelectorAll(".number")
numbers.forEach(number => number.addEventListener("click", handleNumBtnClick))

function handleNumBtnClick(event){
    const number = event.target.textContent;
    appendNumber(number);
}

function appendNumber(number) {
    if (currentNumber.includes(".") && number === ".") 
        return
    currentNumber += number;
    updateDisplay(currentNumber);
}


// Clear button

const clear = document.querySelector("#clear");
clear.addEventListener("click", () => clearInput())

function clearInput() {
    currentNumber = "0";
    previousNumber = "";
    operator = "";
    updateDisplay(currentNumber)
}

// Delete button

const deleteLast = document.querySelector("#delete");

deleteLast.addEventListener("click", () => handleBackspace());

function handleBackspace() {
    if (currentNumber !== "0") {
        currentNumber = currentNumber.slice(0, -1)
        updateDisplay(currentNumber);
    } 
    }

// Plus-minus button

const negative = document.querySelector("#negative");

function switchSign() {
    currentNumber = (Number(currentNumber) * -1).toString();
    updateDisplay(currentNumber);
}

negative.addEventListener("click", () => switchSign())