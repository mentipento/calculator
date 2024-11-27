// --------------------------
// Global Variables
// --------------------------

const maxInputLength = 24;
let currentNumber = "0";
let previousNumber = "";
let operator = "";
let resultCalculated = false;

// --------------------------
// DOM Elements
// --------------------------

const display = document.querySelector("#display");
const numbers = document.querySelectorAll(".number");
const arithmetic = document.querySelectorAll(".arithmetic");
const equals = document.querySelector("#equals");
const clear = document.querySelector("#clear");
const deleteLast = document.querySelector("#backspace");
const negative = document.querySelector("#negative");

// --------------------------
// Helper Functions
// --------------------------

function updateDisplay(number) {
    display.textContent = number.replace(/^0+(?=\d)/, ""); // Removes leading "0"s unless a decimal point follows
}

function appendNumber(number) {
    if (resultCalculated) {
        currentNumber = number; // Prevent attaching digits to old number
        resultCalculated = false;
    } else {
        if ((currentNumber.includes(".") && number === ".") || currentNumber.length >= maxInputLength) {
            return;
        }
        currentNumber += number;
    }
    updateDisplay(currentNumber);
}

function getOperator(event) {
    if (resultCalculated) {
        resultCalculated = false;
    } else if (previousNumber !== "") {
        calculate();
    }
    operator = event.target.textContent;
    previousNumber = display.textContent;
    currentNumber = "0";
}

function calculate() {
    if (previousNumber === "") {
        return;
    }

    currentNumber = +currentNumber;
    previousNumber = +previousNumber;

    let result = operate(previousNumber, currentNumber, operator);
    result = Math.round(result * 1e10) / 1e10;
    updateDisplay(result.toString());
    previousNumber = result;
    currentNumber = "0";
    resultCalculated = true;  // Verhindert, dass weitere Zahlen nach Berechnung hinzugefügt werden
}


function clearInput() {
    currentNumber = "0";
    previousNumber = "";
    operator = "";
    updateDisplay(currentNumber);
}

function handleBackspace() {
    if (currentNumber !== "0") {
        currentNumber = currentNumber.slice(0, -1);
        updateDisplay(currentNumber);
    }
}

function switchSign() {
    currentNumber = (Number(currentNumber) * -1).toString();
    updateDisplay(currentNumber);
}

function handleNumBtnClick(event) {
    const number = event.target.textContent;
    appendNumber(number);
}

// --------------------------
// Event Listeners
// --------------------------

numbers.forEach(number => number.addEventListener("click", handleNumBtnClick));
arithmetic.forEach(number => number.addEventListener("click", getOperator));
equals.addEventListener("click", () => calculate());
clear.addEventListener("click", () => clearInput());
deleteLast.addEventListener("click", () => handleBackspace());
negative.addEventListener("click", () => switchSign());

// --------------------------
// Math Functions
// --------------------------

function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

function operate(num1, num2, operator) {
    switch (operator) {
        case '+':
            return add(num1, num2);
        case '-':
            return subtract(num1, num2);
        case '*':
            return multiply(num1, num2);
        case '/':
            return divide(num1, num2);
    }
}

// --------------------------
// Event Listeners for Keyboard Input
// --------------------------

const numButtons = {
    "1": one,
    "2": two,
    "3": three,
    "4": four,
    "5": five,
    "6": six,
    "7": seven,
    "8": eight,
    "9": nine,
    "0": zero,
    "+": plus,
    "-": minus,
    "*": multiplication,
    "/": division,
    ".": decimal,
    ",": decimal,
    "Enter": equals,
    "Escape": clear,
    "–": negative,
    "Backspace": backspace,
    "Numpad1": one,
    "Numpad2": two,
    "Numpad3": three,
    "Numpad4": four,
    "Numpad5": five,
    "Numpad6": six,
    "Numpad7": seven,
    "Numpad8": eight,
    "Numpad9": nine,
    "Numpad0": zero,
    "NumpadAdd": plus,
    "NumpadSubtract": minus,
    "NumpadMultiply": multiplication,
    "NumpadDivide": division,
    "NumpadDecimal": decimal,
    "NumpadEnter": equals,
    "NumpadEscape": clear
};

document.addEventListener("keydown", (event) => {
    if (Object.keys(numButtons).includes(event.key)) {
        numButtons[event.key].click();
    }
});