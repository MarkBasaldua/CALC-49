// Simple Calculator
function calculate() {
    let num1 = parseFloat(document.getElementById('num1').value);
    let num2 = parseFloat(document.getElementById('num2').value);
    let operation = document.getElementById('operation').value;
    let result;

    if (isNaN(num1) || isNaN(num2)) {
        document.getElementById('calcResult').innerText = "Please enter valid numbers.";
        return;
    }

    switch (operation) {
        case 'add':
            result = num1 + num2;
            break;
        case 'subtract':
            result = num1 - num2;
            break;
        case 'multiply':
            result = num1 * num2;
            break;
        case 'divide':
            if (num2 === 0) {
                document.getElementById('calcResult').innerText = "Cannot divide by zero.";
                return;
            }
            result = num1 / num2;
            break;
        default:
            result = "Invalid operation.";
    }

    document.getElementById('calcResult').innerText = `Result: ${result}`;
}

// Temperature Converter 
function promptTemperature() {
    let temperature = prompt("Enter the temperature in Celsius:");
    temperature = parseFloat(temperature);

    if (isNaN(temperature)) {
        console.log("Please enter a valid number");
        document.getElementById('promptResult').innerText = "Please enter a valid number";
        return;
    }

    let fahrenheit = (temperature * 9 / 5) + 32;
    console.log(`The conversion of ${temperature}°C to Fahrenheit is ${fahrenheit.toFixed(2)}°F`);
    document.getElementById('promptResult').innerText = `The conversion of ${temperature}°C to Fahrenheit is ${fahrenheit.toFixed(2)}°F`;
}
