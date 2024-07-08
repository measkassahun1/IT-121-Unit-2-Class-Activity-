// Function to add two numbers
function addNumbers() {
    let num1 = parseFloat(document.getElementById('num1').value);
    let num2 = parseFloat(document.getElementById('num2').value);
    let result = num1 + num2;
    document.getElementById('result').textContent = result;
}

// Function to subtract two numbers
function subtractNumbers() {
    let num1 = parseFloat(document.getElementById('num1').value);
    let num2 = parseFloat(document.getElementById('num2').value);
    let result = num1 - num2;
    document.getElementById('result').textContent = result;
}

// Function to multiply two numbers
function multiplyNumbers() {
    let num1 = parseFloat(document.getElementById('num1').value);
    let num2 = parseFloat(document.getElementById('num2').value);
    let result = num1 * num2;
    document.getElementById('result').textContent = result;
}

// Function to divide two numbers
function divideNumbers() {
    let num1 = parseFloat(document.getElementById('num1').value);
    let num2 = parseFloat(document.getElementById('num2').value);
    if (num2 === 0) {
        document.getElementById('result').textContent = "Error: Divide by zero";
    } else {
        let result = num1 / num2;
        document.getElementById('result').textContent = result;
    }
}

// Event listeners for buttons
document.getElementById('add').addEventListener('click', addNumbers);
document.getElementById('subtract').addEventListener('click', subtractNumbers);
document.getElementById('multiply').addEventListener('click', multiplyNumbers);
document.getElementById('divide').addEventListener('click', divideNumbers);
