const display = document.getElementById("display");

display.textContent = "0"


const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");
const four = document.getElementById("four");
const five = document.getElementById("five");
const six = document.getElementById("six");
const seven = document.getElementById("seven");
const eight = document.getElementById("eight");
const nine = document.getElementById("nine");
const zero = document.getElementById("zero");

const plus = document.getElementById("plus");

let displayNumber = "";

let firstNumber = 0;
let secondNumber = 0;
let result = undefined;
let operand = "";

one.addEventListener('click', () => {
    updateDisplayNumberButton('1');
});

two.addEventListener('click', () => {
    updateDisplayNumberButton('2');
});

three.addEventListener('click', () => {
    updateDisplayNumberButton('3');
});

four.addEventListener('click', () => {
    updateDisplayNumberButton('4');
});

five.addEventListener('click', () => {
    updateDisplayNumberButton('5');
});

six.addEventListener('click', () => {
    updateDisplayNumberButton('6');
});

seven.addEventListener('click', () => {
    updateDisplayNumberButton('7');
});

eight.addEventListener('click', () => {
    updateDisplayNumberButton('8');
});

nine.addEventListener('click', () => {
    updateDisplayNumberButton('9');
});

zero.addEventListener('click', () => {
    updateDisplayNumberButton('0');
});


plus.addEventListener('click', () =>{
    operatorButton("+");
})

function clearAllValues(){
    firstNumber = 0;
    secondNumber = 0;
    displayNumber = 0;
    operand = "";
    result = "";

    display.textContent = displayNumber;
}

function updateDisplayNumberButton(num){
    displayNumber = displayNumber + num;
    display.textContent = displayNumber;
}

function operate(firstNumber, secondNumber, operand){
    switch (operand){
        case "+":
            return firstNumber + secondNumber;
            
        case "-":
            return firstNumber - secondNumber;
        case "*":
            return firstNumber * secondNumber;
        case "/":
            return firstNumber / secondNumber;
    }
}


function operatorButton(op){
    if (operand == ""){
        firstNumber = parseInt(displayNumber);
        operand = op;
        displayNumber = '';
        // display.textContent = displayNumber;
    }
    else{
        
        secondNumber = parseInt(displayNumber);
        result = operate(firstNumber, secondNumber, operand);
        firstNumber = result;
        
        display.textContent = firstNumber;
        displayNumber = "";
        operand = op;
    
        
        
    }    
}




