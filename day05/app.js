// for loop
// A for loop is best when we know exactly how many times we need to run a block of code.
/*
 for(initialization, condition, update){
    console.log("write somethings");
 };
*/
for (let count = 1; count <= 10; count++) {
  console.log(`Iteration/Loop ${count}`);
}

for (let even = 1; even <= 100; even++) {
  if (even % 2 === 0) {
    console.log(`The even number is ${even}`);
  }
}

let sum = 0;
for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) {
    sum += i;
  }
}
console.log(sum);

let language = "javascript";
for (let i = 0; i < language.length; i++) {
  console.log(language.charAt(i));
}

// Nested Loop
for (let i = 1; i <= 3; i++) {
  for (let j = 0; j <= 3; j++) {
    console.log(`Row ${i}, Col ${j}`);
  }
}

// Break and Continue
for (let i = 1; i <= 5; i++) {
  if (i === 3) break;
  console.log(i);
}

for (let i = 1; i <= 5; i++) {
  if (i === 3 || i === 4) continue;
  console.log(i);
}

// Multiple Counters
for (let i = 1, j = 10; i <= 10 && j >= 1; i++, j--) {
  console.log(i, j);
}

/* 1. Generate a Pyramid Pattern using Nested Loop as it is shown below:
 *
 * *
 * * *
 * * * *
 * * * * *
 */
// start 9.16PM 4/20/2025

for (let i = 1; i <= 1; i++) {
  console.log(i = "*");
  for (let j = 2; j <= 2; j++) {
    console.log(i = "*", j = "*");

    for (let k = 3; k <= 3; k++) {
      console.log(i = "*",  j = "*", k = "*");

      for (let l = 4; l <= 4; l++) {
        console.log(i = "*",  j = "*", k = "*", l = "*");

        for (let m = 5; m <= 5; m++) {
          console.log(i = "*",  j = "*", k = "*", l = "*", m = "*");
        }
      }
    }
  }
}


let star = [];
for (let row = 1; row <= 5; row++) {
    for (let col = 1; col <= 1; col++) {
        star.push("*");
        console.log(star.join(""));        
    }    
}


// 2. Create Multiplication Table (Using for loop)
// Write a program to print the multiplication table of a given number up to 10. For Example: If N = 3;
let multi = [];
for (let row = 1; row <= 10; row++) {
    let n = 3;
    let result;
    if (n === 3) {
     result = n * row;
    }
    multi.push(`${n} * ${row} = ${result}`)
}
console.log(multi.join("\n"));



// 3. Find the summation of all odd numbers between 1 to 500 and print them on teh console log.
let result = 0;
for (let i = 0; i <= 500; i++) {
    if (i%2 !== 0) {
        result = result + i;
    }
}
console.log(result);


// 4. Skipping Multiples of 3
// Write a program to print numbers from 1 to 20, but skip multiples of 3.
for (let i = 0; i <= 20; i++) {
    if (i % 3 !== 0) {
        console.log(i);
    }    
};


/*
5. Reverse Digits of a Number (Using while loop)
Write a program to reverse the digits of a given number using a while loop.
Example:
Input: 6789
Output: 9876 
*/

const reverse = [];
let output;
const input = 6789;
const inputStr = input.toString();
let index = inputStr.length -1;
console.log(index);
while (index >= 0) {
  reverse.push(inputStr[index]);
  index--;
}
console.log(Number(reverse.join("")));

output = Number(reverse.join(""));
console.log(output);


console.log(reverse.length);
console.log(reverse);
console.log('*'.padStart(3));

