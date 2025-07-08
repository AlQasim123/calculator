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
    numOne = parseInt(numOne);
    numTwo = parseInt(numTwo);
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

//
const display = document.querySelector(".display");

// select all digits element 
const numbers = document.querySelectorAll(".num");
numbers.forEach((num) => {
    num.addEventListener("click", () => {
        if (done) {
            display.textContent = "";
            done = false
        };
        display.textContent += num.textContent;
    })
});

// select all operators element
const operators = document.querySelectorAll(".op");
operators.forEach((op) => {
    op.addEventListener("click", () => {
        if (display.textContent) {
            if (operator) {
                current = display.textContent
                result = operate(result, operator, current) 
            } else {
                result = display.textContent;
            }
            operator = op.textContent
            display.textContent = "";
        };
    })
});

// the equal button
const equal = document.querySelector(".equal")
equal.addEventListener("click", () => {
    if (display.textContent && operator) {
        current = display.textContent;
        result = operate(result, operator, current)
    } else  {
        result = display.textContent
    };
    display.textContent = result
    result = current = operator = undefined;
    done = true;
})

// the clear button
const clear = document.querySelector(".clear")
clear.addEventListener("click", () => {
    firstNum = secondNum = operator = undefined;
    display.textContent = "";
})
