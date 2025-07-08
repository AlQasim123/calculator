// operation
function add(a,b) {
    return a + b;
}

function subtract(a,b) {
    return a - b;
}

function multiply(a,b) {
    return a * b;
}

function divide(a,b) {
    if (b === 0) return "Cant divide by 0, litte one :)";
    return Math.round((a / b) * 1000) / 1000;
}

// controle the operation 
function operate(numOne, op, numTwo) {
    numOne = parseFloat(numOne);
    numTwo = parseFloat(numTwo);
    switch(op) {
        case "+":
            return add(numOne, numTwo);
        case "-":
            return subtract(numOne, numTwo);
        case "x":
            return multiply(numOne, numTwo);
        case "/":
            return divide(numOne, numTwo);
        default:
            return "Math Error"
    }
}

// vars to contains the result of multi operation 
// and the current number on the screen and the operator and
// after equal button clicked to clear screen 
let result, current, operator, done = false; 


const operationScreen = document.querySelector(".operations");
const displayScreen = document.querySelector(".screen");

// select all digits element 
const numbers = document.querySelectorAll(".num");
numbers.forEach((num) => {
    num.addEventListener("click", () => {
        if (done) {
            operationScreen.textContent = "";
            displayScreen.textContent = "";
            done = false
        };
        displayScreen.textContent += num.textContent;
    })
});

// select all operators element
const operators = document.querySelectorAll(".op");
operators.forEach((op) => {
    op.addEventListener("click", () => {
        if (displayScreen.textContent) {
            if (done) {
                operationScreen.textContent = "";
                done = false
            };
            if (operator) {
                current = displayScreen.textContent
                result = operate(result, operator, current) 
            } else {
                result = displayScreen.textContent;
            }
            operator = op.textContent
            operationScreen.textContent += displayScreen.textContent + operator
            displayScreen.textContent = "";
        };
    })
});

// the equal button
const equal = document.querySelector(".equal")
equal.addEventListener("click", () => {
    if (displayScreen.textContent && operator) {
        current = displayScreen.textContent;
        operationScreen.textContent += current
        result = operate(result, operator, current)
    } else if (!result) {
        result = displayScreen.textContent
    };
    displayScreen.textContent = result; 
    result = current = operator = undefined;
    done = true;
})

// the clear button
const clear = document.querySelector(".clear")
clear.addEventListener("click", () => {
    firstNum = secondNum = operator = undefined;
    displayScreen.textContent = "";
    operationScreen.textContent = "";
})
