// * 1. Odd or Even?
//  Take a number and find if the number is an odd or even   number.
//  Print the number and result in the console.

let num = 5;
let oddOrEven = 5%2 === 0 ? `${num} is even`:  `${num} is odd`;
console.log(oddOrEven);

/*
* 2. Do you have a Driving License?
Let's check if you are eligible to get a driving license. The eligibility to get a driving licence is 18 years.

 Manage age as a variable.
 Check if the age is elligible for a driving license and print it on the console accordingly.
 */

 let age = 25;
 let license = age >= 18 
   ? "Congratulations! You are eligible to apply for a driving license." 
   : "Sorry, you are too young to apply for a driving license.";
console.log(license); 

/*
 * 3. Calculate CTC with a Bonus
Let's calculate how much you earn from your office.

 You get 12,300 rupees as your monthly salary.
 You get a 20% bonus on your annual salary.
 How much money do you make per annum as a CTC?
 */

let salary = 12300;
let annualSalary = 12 * salary;
let bonus = (annualSalary/100)*20;
let annualCTC = annualSalary + bonus;
console.log(annualCTC);

/*
 *4. Write a program for the Traffic Light Simulation.
Red Light... Green Light... Let's Play!

 Create a color variable.
 Based on the color variable's value print in the console if a traveler needs to STOP or GO. The Red color is for STOP and the Green color is for GO. 
 */
let color = 'red';
let signal = color == 'red'? "Stop": color == 'green'? "Go": "prepare to start";
console.log(signal);

/*
 *5. Create an Electricity Bill Calculator
Let's calculate how much you pay for electricity bills per month and annually.

 Create a units variable. Based on this value you will calculate the total electricity bill for a months.
 
 If each day you consume the units and each unit cost 15, how much will you be charged per month?
 
 If there is a 20% discount on the annual payment, how much will you be charged for an annual payment? 
 */
let dailyConsume = 8;
let monthlyConsume = 8 * 30;
let monthlyCharge = monthlyConsume * 15;
let annualCharge = monthlyCharge * 12 * 0.8;
console.log(annualCharge);

/*
 *6. Leap Year Checker
  Is 2025 a Leap Year?
  Take year as input.
  Use the arithmetic operator and ternary operator to print if a year is a leap year or not. 
*/
let input = 2025;
let year = input % 100 === 0 && input % 400 === 0 ? "leap year" : input % 100 !== 0 && input % 4 === 0 ? "leap year": "not a leap year";
console.log(year);

/*
 * 7. Max of Three Numbers
Find the max number from the lot.

 Take three numbers and assign them to variables p, q, and r.
 Now find the maximum of these three numbers using the comparison operators.
 */
let p = 5;
let q = 8;
let r = 10;





