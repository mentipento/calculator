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

const numbers = document.querySelectorAll(".number")
numbers.forEach(number => number.addEventListener("click", inputNumber)
)
    
function inputNumber(event) {
    if (event.target.textContent === "0" && firstNumber === "0") {
        document.querySelector("#display").textContent = firstNumber;
    }
    else if (operator === "") {
        firstNumber += event.target.textContent;
        document.querySelector("#display").textContent = firstNumber.slice(1);
        console.log(firstNumber);
    } else {
        secondNumber += event.target.textContent;
        document.querySelector("#display").textContent = firstNumber;
        console.log(secondNumber);
    }
}

