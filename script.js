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

function operate(num1, num2, callback) {
    return callback(num1, num2);
}

const arithmetic = document.querySelectorAll(".arithmetic")

arithmetic.forEach(number => number.addEventListener("click", getOperator)
)

function getOperator(event) {
        operator = event.target.textContent;
        document.querySelector("#display").textContent = operator;
    }

const numbers = document.querySelectorAll(".number")
numbers.forEach(number => number.addEventListener("click", getNumber)
)
    
function getNumber(event) {
    if (event.target.textContent === "0" && firstNumber === "0") {
        document.querySelector("#display").textContent = firstNumber;
    }
    else if (operator === "") {
        firstNumber += event.target.textContent;
        document.querySelector("#display").textContent = firstNumber.replace(/^0(?=\d)/, "");
    } else {
        secondNumber += event.target.textContent;
        document.querySelector("#display").textContent = secondNumber.replace(/^0(?=\d)/, "");
        console.log(secondNumber);
    }
}

const clear = document.querySelector("#clear");
clear.addEventListener("click", () => {
    firstNumber = "0";
    secondNumber = "";
    operator = "";
    document.querySelector("#display").textContent = firstNumber
})

const negative = document.querySelector("#negative");
negative.addEventListener("click", () => {
    if (operator === "") {
        firstNumber *= -1;
        document.querySelector("#display").textContent = firstNumber
    } else {
        secondNumber *= -1;
        document.querySelector("#display").textContent = secondNumber
    }

})

const percent = document.querySelector("#percent");
percent.addEventListener("click", () => {
    if (operator === "") {
        firstNumber /= 100;
        document.querySelector("#display").textContent = firstNumber
    } else {
        secondNumber /= 100;
        document.querySelector("#display").textContent = secondNumber
    }
})

const equals = document.querySelector("#equals");
equals.addEventListener("click", () => {
    if (secondNumber === "") {
    } else if (operator === "+") {
        firstNumber = operate(+firstNumber, +secondNumber, add) 
        document.querySelector("#display").textContent = firstNumber;
        secondNumber = "";
        operator = "";
    } else if (operator === "-") {
        firstNumber = operate(+firstNumber, +secondNumber, subtract) 
        document.querySelector("#display").textContent = firstNumber;
        secondNumber = "";
        operator = "";
    } else if (operator === "*") {
        firstNumber = operate(+firstNumber, +secondNumber, multiply) 
        document.querySelector("#display").textContent = firstNumber;
        secondNumber = "";
        operator = "";
    } else if (operator === "/") {
        firstNumber = operate(+firstNumber, +secondNumber, divide) 
        document.querySelector("#display").textContent = firstNumber;
        secondNumber = "";
        operator = "";
    }
})