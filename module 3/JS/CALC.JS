let num1 = prompt("Enter the first number:");
let num2 = prompt("Enter the second number:");
let operation = prompt("Select the operation: 1. Addition, 2. Substraction, 3.Multiplication, 4. Division.");
if(operation==1){
    //do the operation
    let result = Number(num1) + Number(num2);
    //display result
    console.log(result);
}
if(operation==2){
    //do the operation
    let result = Number(num1) - Number(num2);
    //display result
    console.log(result);
}