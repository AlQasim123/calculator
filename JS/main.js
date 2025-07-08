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
