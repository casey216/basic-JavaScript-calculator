alert("Hello")
#main function
def main():
    print("welcome to Simple CLI calculator")

    #collects user input
    number1 = validate_number(input("Enter the first number: "))
    number2 = validate_number(input("Enter the second number: "))
    operand = validate_operand()

    #calculates and prints answer
    ans = calculate(number1, number2, operand)    
    print(f"{number1} {operand} {number2} = {ans}")

#fuction to validate numbers
def validate_number(n):
    try:
        n = int(n)
        return n
    except:
        print(f"your input {n} is not an integer!!!")
        validate_number(input("Enter a valid number: "))

#fuction to validate operands
def validate_operand():
    operands = "+-*/%"
    operand = input('''
    Enter a valid operand
    + for addition
    - for subtraction
    * for multiplication
    / for division
    % for modulus
    ''')
    if operand in operands:
        return operand
    else:
        print(f"your input {operand} is not a valid operand!!!")
        validate_operand()

#function to run calculations
def calculate(num1, num2, o):
    if o == "+":
        return num1 + num2
    elif o == "-":
        return num1 - num2
    elif o == "*":
        return num1 * num2
    elif o == "/":
        return num1 / num2
    else:
        return num1 % num2

#run the program
main()
