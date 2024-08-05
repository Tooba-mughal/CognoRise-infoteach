// script.js

const display = document.getElementById('display');
let displayValue = '0';
let pendingValue;
let evalStringArray = [];

const updateDisplay = () => {
    display.innerText = displayValue;
};

const numberButtons = document.querySelectorAll('.number');
numberButtons.forEach(button => {
    button.addEventListener('click', (event) => {
        const numberText = event.target.innerText;

        if (displayValue === '0') {
            displayValue = numberText;
        } else {
            displayValue += numberText;
        }
        updateDisplay();
    });
});

const operatorButtons = {
    '+': document.getElementById('add'),
    '-': document.getElementById('subtract'),
    '*': document.getElementById('multiply'),
    '/': document.getElementById('divide')
};

for (const [operator, button] of Object.entries(operatorButtons)) {
    button.addEventListener('click', () => {
        pendingValue = displayValue;
        displayValue = '0';
        evalStringArray.push(pendingValue);
        evalStringArray.push(operator);
    });
}

document.getElementById('equals').addEventListener('click', () => {
    evalStringArray.push(displayValue);
    const evaluation = eval(evalStringArray.join(' '));
    displayValue = evaluation + '';
    evalStringArray = [];
    updateDisplay();
});

document.getElementById('clear').addEventListener('click', () => {
    displayValue = '0';
    pendingValue = undefined;
    evalStringArray = [];
    updateDisplay();
});