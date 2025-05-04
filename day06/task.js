// 1. Write a Function to Convert Celsius to Fahrenheit
// Create a function celsiusToFahrenheit(celsius) that converts a temperature from Celsius to Fahrenheit. Formula: (Celsius * 9/5) + 32 = Fahrenheit

function celsiusToFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}
const fahrenheit = celsiusToFahrenheit(50);
console.log(fahrenheit);

/* 2. Create a Function to Find the Maximum of Two Numbers
Write a function findMax(num1, num2) that returns the larger of the two numbers. It should work for negative numbers as well. */

function findMax(num1, num2) {
  return num1 > num2 ? num1 : num2;
}
const findResult = findMax(5, -10);
console.log(findResult);

/* 3. Function to Check if a String is a Palindrome
Create a function isPalindrome(str) that checks if a given string is a palindrome (reads the same forward and backward). You can not use any string function that we have not learned in the series so far. */




/* 4. Write a Function to Find Factorial of a Number
Create a function factorial(n) that returns the factorial of n. Example 5! = 5 * 4 * 3 * 2 * 1 */

function factorial(num) {
  if (num == 0) {
    return 1;
  } else {
    return num * factorial(num - 1);
  }
}
const factorialResult = factorial(5);
console.log(factorialResult);

/* 5. Write a function to Count Vowels in a String
Write a function countVowels(str) that counts the number of vowels (a, e, i, o, u) in a given string. */


const vowels = ["a", "e", "i", "o", "u"];

function countVowels(str) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str.charAt(i))) {
      count++;
    }
  }
  return count;
}
console.log(countVowels("alif"));


/* 6. Write a Function to Capitalize the First Letter of Each Word in a Sentence
Write a function capitalizeWords(sentence) that takes a sentence and capitalizes the first letter of each word. You can use the toUpperCase() method of string to convert the lowercase to uppercase. */




/* 7. Use an IIFE to Print “Hello, JavaScript!”
Write an IIFE that prints "Hello, JavaScript!" to the console. Here the Second word must be supplied using parameter and argument. */

(function (lang) {
    console.log(`Hello, ${lang}`);
})("JavaScript!")


/*8. Create a Simple Callback Function
Write a function greet(name, callback), where callback prints a message using the name parameter.*/

function greet(name, callback) {
    return callback(name);
}
function sayHello(name) {
    console.log("hello " + name);
}
greet("alif", sayHello);

