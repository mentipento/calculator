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
    if (num2 === 0) {
        return "shame on you!"
    } else {
        return num1 / num2;
    }
}

let firstNumber = "0";
let secondNumber = "";
let operator = "";
let resultCalculated = "false"

function operate(num1, num2, callback) {
    return callback(num1, num2);
}

const arithmetic = document.querySelectorAll(".arithmetic")

arithmetic.forEach(number => number.addEventListener("click", getOperator)
)

function getOperator(event) {
        operator = event.target.textContent;
        if (secondNumber !== "") {
            firstNumber = operate(+firstNumber, +secondNumber, operations[operator]);
            updateDisplay(firstNumber);
            secondNumber = "";
        } 
}

const numbers = document.querySelectorAll(".number")
numbers.forEach(number => number.addEventListener("click", getNumber)
)
    
function getNumber(event) {
    if (resultCalculated === true) {
        secondNumber += event.target.textContent;
        updateDisplay(secondNumber.replace(/^0(?=\d)/, ""));
        resultCalculated = false;
    } else {
    if (event.target.textContent === "0" && firstNumber === "0") {
        updateDisplay(firstNumber);
    }
    else if (operator === "") {
        firstNumber += event.target.textContent;
        updateDisplay(firstNumber.replace(/^0(?=\d)/, ""));
    } else {
        secondNumber += event.target.textContent;
        updateDisplay(secondNumber.replace(/^0(?=\d)/, ""));
    }
}}

const clear = document.querySelector("#clear");
clear.addEventListener("click", () => {
    firstNumber = "0";
    secondNumber = "";
    operator = "";
    updateDisplay(firstNumber)
})

const negative = document.querySelector("#negative");
negative.addEventListener("click", () => {
    if (operator === "") {
        firstNumber *= -1;
        updateDisplay(firstNumber);
    } else {
        secondNumber *= -1;
        updateDisplay(secondNumber);
    }

})

const percent = document.querySelector("#percent");
percent.addEventListener("click", () => {
    if (operator === "") {
        firstNumber /= 100;
        updateDisplay(firstNumber);
    } else {
        secondNumber /= 100;
        updateDisplay(secondNumber);
    }
})

const equals = document.querySelector("#equals");

const operations = {
    "+": add,
    "-": subtract,
    "*": multiply,
    "/": divide,
};

equals.addEventListener("click", () => {
    if (secondNumber !== "") {
        firstNumber = operate(+firstNumber, +secondNumber, operations[operator]);
        updateDisplay(firstNumber);
        secondNumber = "";
        operator = "";
        resultCalculated = true;
}})

function updateDisplay(number) {
    document.querySelector("#display").textContent = number;
}