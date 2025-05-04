// 2. Build an ATM Cash Withdrawal System
// Rajan goes to the Axis bank ATM. He enters an amount to withdraw. The ATM only allows multiples of 100. Print “Withdrawal successful” if valid, otherwise print “Invalid amount”.

let amount = 5000;
if (amount % 100 === 0) {
    console.log("Withdrawal successful");
} else {
     console.log("Invalid amount");
}


// 3. Build a Calculator with switch-case
// Write a simple calculator that takes an operator (+, -, , /, %) as input, and performs the operation on two numbers. Print the output on the console.

let num1 = 10;
let operator = "/";
let num2 = 5;

switch (operator) {
    case "+":
        console.log(num1 + num2);
        break;
    case "-":
        console.log(num1 - num2);
        break;
    case "*":
        console.log(num1 * num2);
        break;
    case "/":
        console.log(num1 / num2);
        break;
    case "%":
         console.log(num1 % num2);
         break;
    default:
      console.log("make sure a valid operator like +, -, *, /, %");
}

/*4. Pay for your movie ticket
Imagine, the INOX charges ticket prices based on age:

Children (<18 years): $3
Adults (18 - 60 years): $10
Seniors (60+ years): $8
Write a program that prints the ticket price based on the person’s age.*/

let age = 35;
if (age < 18) {
    console.log("ticket price $3");
} else if (18 <= age && age <= 60) {
    console.log("ticket price $10");
}else{
    console.log("ticket price $8");
};


/*5. Horoscope Sign Checker
Write a program that prints the zodiac sign(Aries, Taurus, Gemini, etc.) based on a person’s birth month. Make it month bases, not date based. Like March and April borns are Aries, Aplil and May born are Taurus, and so on. Do not use if-else. */





/*6. Which Triangle?
A triangle has 3 sides. A Triangle type is determined by its sides:

All sides equal is called, Equilateral Triangle.
Two sides equal is called, Isosceles Triangle.
All sides different is called, Scalene Triangle.
Take the sides of a triangle as input and write a program to determine the triangle type. Change the inputs everytime manually to see if the output changes correctly. */

let a = 10;
let b = 12;
let c = 12;
if (a === b && b === c) {
    console.log("All sides equal is called, Equilateral Triangle.");
} else if(a === b && b === c && c === a){
    console.log("Two sides equal is called, Isosceles Triangle.");
} else{
    console.log("All sides different is called, Scalene Triangle.");
};