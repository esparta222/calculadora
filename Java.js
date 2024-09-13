let display = document.getElementById('display'); 
let currentInput = '';  
let operator = '';      
let previousInput = ''; 

function insertDigit(digit) {
    currentInput += digit;  
    updateDisplay();       
}

function insertOperator(op) {
    
    if (currentInput === '' && previousInput !== '') {
        operator = op;  
    } else if (currentInput !== '') {
        
        if (previousInput !== '') {
            calculate();
        }
        operator = op;
        previousInput = currentInput; 
        currentInput = '';             
    }
}

function insertDot() {
    if (!currentInput.includes('.')) {
        currentInput += '.';  
        updateDisplay();
    }
}

function clearDisplay() {
    // Resetea todas las variables para limpiar la calculadora.
    currentInput = '';
    previousInput = '';
    operator = '';
    updateDisplay();
}

function deleteDigit() {
    currentInput = currentInput.slice(0, -1);  
    updateDisplay();
}

function calculate() {
    let result;
    let prev = parseFloat(previousInput);  
    let curr = parseFloat(currentInput);   

    if (isNaN(prev) || isNaN(curr)) return;  

    
    switch (operator) {
        case '+':
            result = prev + curr;
            break;
        case '-':
            result = prev - curr;
            break;
        case '*':
            result = prev * curr;
            break;
        case '/':
            result = curr !== 0 ? prev / curr : 'Error';  
            break;
        case '%':
            result = prev % curr;
            break;
        default:
            return;
    }

    currentInput = result.toString();  
    operator = '';                     
    previousInput = '';                
    updateDisplay();
}

function updateDisplay() {
    
    display.textContent = currentInput || '0';
}
