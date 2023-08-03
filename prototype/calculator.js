let display = document.getElementById('display');
let currentExpression = '';

function appendValue(value) {
    currentExpression += value;
    display.value = currentExpression;
}

function clearDisplay() {
    currentExpression = '';
    display.value = '';
}

function calculate() {
    try {
        const result = eval(currentExpression);
        display.value = result;
        currentExpression = String(result);
    } catch (error) {
        display.value = 'SYNTAX ERROR';
    } 
}
