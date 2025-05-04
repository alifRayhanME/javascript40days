// * Operators & Expressions in JavaScript

// Operator -> Symbols (+, -, *, /)
// Operants -> x + y, (x and y are the operants)
// Expression -> a = 5   or  4 + 6
let a = 4 + 6;

// * Arithmetic Operator
let x = 11;
let y = 2;
console.log(x + y);
console.log(x - y);
console.log(x * y);
console.log(x / y);
console.log(x ** y);
console.log(x % y);

// Post-increment: prints the current value, then increments count
let count = 5;
console.log(count++);  
console.log(count);

let num1 = 4;
num2 = num1--;
console.log(num2);


// Pre-increment: increments count to  first, then prints 
let count1 = 20;
console.log(++count1);

let num3 = 10;
console.log(--num3);


// * Assignment Operator 
let X = 10;
X += 5;  // X = X + 5;
X -= 5;  // X = X - 5;
X *= 5;  // X = X * 5;
X /= 5;  // X = X / 5;
console.log(X);


// * Comparison Operator

// the == work when type coercions enable
// the === work when type coercions disable
console.log(0 == false);
console.log(0 === false);
console.log(3 == "3");
console.log(3 === "3");
console.log(3 !== "3");


// non-primitive value compare memory location
let obj1 = {name: "Alif Rayhan"};
let obj2 = {name: "Alif Rayhan"};
console.log(obj1 == obj2);
console.log(obj1 === obj2);

console.log(!true);


// * Logical Operator (&&, ||, ??, !)

// && operator 
console.log(false && false);
console.log(true && false);
console.log(true && true);
console.log(false && true);

console.log("cow" && "horse");
console.log(4>5 && 5===6);
console.log(0 && 1);

// || operator
console.log(false || false);
console.log(true || false);
console.log(true || true);
console.log(false || true);

console.log("cow" || "horse");

// ?? ( Nullish Coalescing ) Operator 
// the ?? operator first value null or undefined when return second value neither return first value 

let a1 = null ?? 5;
console.log(a1);

let a2 = undefined ?? "alif";
console.log(a2);

let a3 = false ?? "rayhan";
console.log(a3);

let a4 = 2 ?? "islam";
console.log(a4);

// * Ternary Operator
let age = 25;
let massage = age >= 60 ? "Senior Citizen" : "Non Senior Citizen";
console.log(massage); 
