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

let displayNumber = "";

one.addEventListener('click', () => {
    updateDisplay('1');
});

two.addEventListener('click', () => {
    updateDisplay('2');
});

three.addEventListener('click', () => {
    updateDisplay('3');
});

four.addEventListener('click', () => {
    updateDisplay('4');
});

five.addEventListener('click', () => {
    updateDisplay('5');
});

six.addEventListener('click', () => {
    updateDisplay('6');
});

seven.addEventListener('click', () => {
    updateDisplay('7');
});

eight.addEventListener('click', () => {
    updateDisplay('8');
});

nine.addEventListener('click', () => {
    updateDisplay('9');
});

zero.addEventListener('click', () => {
    updateDisplay('0');
});

function updateDisplay(num){
    displayNumber = displayNumber + num;
    display.textContent = displayNumber;
}




