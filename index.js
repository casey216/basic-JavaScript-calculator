// main function
function main() {
    alert("welcome to Simple JavaScript calculator");

    //collects user input
    let number1 = validate_number(prompt("Enter the first number: "));
    if (number1 != false) {
		let number2 = validate_number(prompt("Enter the second number: "));
		if (number2 != false) {
			let operand = validate_operand();

			//calculates and prints answer
			if (operand != false) {
				let ans = calculate(number1, number2, operand);
				alert(number1 + " " + operand + " " + number2 + " = " + ans);
			}
		}
	}
}

//function to validate numbers
function validate_number(n) {
    if (isNaN(n)) {
		return validate_number(window.prompt("Enter a valid number: "));
	}
	else if (n == null) {
		return false;
	}
    else {
        return parseInt(n);
	}
}

//function to validate operands
function validate_operand() {
    const operands = ["+", "-", "*", "/", "%"];
    let operand = prompt(`
    Enter a valid operand
    + for addition
    - for subtraction
    * for multiplication
    / for division
    % for modulus
    `);
    if (operands.includes(operand)) {
        return operand;
	}
	else if (operand == null) {
		return false;
	}
    else {
        alert("your input '" + operand + "' is not a valid operand!!!");
        return validate_operand();
	}
}

//function to run calculations
function calculate(num1, num2, o) {
    if (o == "+") {
        return num1 + num2;
    }
	else if (o == "-") {
        return num1 - num2;
	}
    else if (o == "*") {
        return num1 * num2;
	}
    else if (o == "/") {
        return num1 / num2;
	}
    else {
        return num1 % num2;
	}
}

//run the program

main()

