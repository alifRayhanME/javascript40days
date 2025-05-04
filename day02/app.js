// *Variable

// Variable: variable are used to store data in javascript.
// let/const storage_name = value;
let fruit = "mango";
// let and const are used to declare variables, but they differ in terms of mutability and scope.
// The equal ( = ) sign is an assignment operator. The right side is the value, and the left side is the variable name.
// Before using let/const, this works the same, but they have different use cases.

// * value assignment

let x = 5;
x = 10;
let y = 8;
x = y;
console.log(x);
// In JavaScript, primitive data types (like numbers, strings, etc.) are passed by value.
// This means that when you assign a primitive value to another variable, a copy of the value is made.


// * naming convention
// The name must have digits(0-9) or letters.
// The name con have $ and _.
// The first character must not be a digit.
// No Reserved Keywords.

let $ = "dollar";
let _ = "underscore";
// let 2morrow;  // * not work
// let my-name; // * not work 
let myName = "alif";
let MyName = "rayhan";
// myName and MyName is same things but javascript is case sensitive so its storage different reference.


// * var/let/const
// 'Var': (Function-scoped) can be redeclared (not recommended).

// 'let': (Block-scoped) can be reassigned.
// 'const': (Block-scoped) **cannot** be reassigned.


/*
**Primitive Data Types:**
- `String` - Text values ("Hello")
- `Number` - Numeric values (25, 3.14)
- `Boolean` - True/False (true, false)
- `Undefined` - A variable declared but not assigned (let x;)
- `Null` - Represents "nothing" (let y = null;)
- `BigInt` - Large numbers (BigInt(12345678901234567890))
- `Symbol` - Unique identifiers (Symbol("id"))

**Non-Primitive (Reference) Data Types:**
- `Object` - Collection of key-value pairs
- `Array` - Ordered list of values
- `Function` - Code that can be executed
*/


// * Variable in memory
// The primitive data type value are storage in stack
// The Non-Primitive data type datatype value are storage in Heap


// * How JavaScript processes code:
// JavaScript code goes through multiple stages before it becomes machine code. 
// These stages include: source code → tokenizing → parsing → generating an Abstract Syntax Tree (AST) → compiling to machine code.
 