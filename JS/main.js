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
    numOne = (numOne !== ".") ? parseFloat(numOne): 0;
    numTwo = (numTwo !== ".") ? parseFloat(numTwo): 0;
    let output;
    switch(op) {
        case "+":
            output = add(numOne, numTwo);
            break;
        case "-":
            output = subtract(numOne, numTwo);
            break;
        
        case "x":
            output = multiply(numOne, numTwo);
            break;
        
        case "/":
            output = divide(numOne, numTwo);
            break;
        default:
            output = "Math Error"
            break;
    }
    if (typeof output === 'string') {
        errorScreen.textContent = output;
        return ;
    }; 
    return output
}

// vars to contains the result of multi operation 
// and the current number on the screen and the operator and
// after equal button clicked to clear screen 
let result, current, operator, done = false, checkOperator = false; 


const operationScreen = document.querySelector(".operations");
const displayScreen = document.querySelector(".screen");
const errorScreen = document.querySelector(".errors");

// select all digits element 
const numbers = document.querySelectorAll(".num");
numbers.forEach((num) => {
    num.addEventListener("click", () => {
        if (done) {
            operationScreen.textContent = "";
            displayScreen.textContent = "";
            errorScreen.textContent = "";
            done = false
        };
        displayScreen.textContent += num.textContent;
        checkOperator = false;
    })
});

// select all operators element
const operators = document.querySelectorAll(".op");
operators.forEach((op) => {
    op.addEventListener("click", () => {
        checkOperator = true
        if (displayScreen.textContent) {
            if (done) {
                operationScreen.textContent = "";
                errorScreen.textContent = "";
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
    if (!checkOperator) {
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
    }
})

// the clear button
const clear = document.querySelector(".clear")
clear.addEventListener("click", () => {
    firstNum = secondNum = operator = undefined;
    displayScreen.textContent = "";
    errorScreen.textContent = "";
    operationScreen.textContent = "";
})

const del = document.querySelector(".delete");
del.addEventListener("click", () => {
    if (displayScreen.textContent) {
        displayScreen.textContent = displayScreen.textContent.slice(0,-1)
    } else if (operationScreen.textContent) {
        displayScreen.textContent = operationScreen.textContent
        operationScreen.textContent = ""        
    }
})


const dot = document.querySelector(".dot");
dot.addEventListener("click", () => {
    if (!displayScreen.textContent.includes(".")) {
        displayScreen.textContent += dot.textContent
    }
    checkOperator = false;
})

