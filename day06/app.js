// function

// * What is javascript function?
// A JavaScript function is a block of code designed to perform a particular task.

// * function & methods
// A function is just a block of code, and a method is also a function, but it's stored as a value of an object’s property.

// * declaration & definition
// Function declaration and definition are the same.

// * function definition
function sayHello() {
    console.log("hello world");
};
sayHello();


// * function as expression
const sayHi = function () {
    console.log("hi alif!");
};
console.log(sayHi);
console.log(sayHi());



// * parameter & argument
// parameter is one kind of variable but parameter not declare let, const or var.
function funcName(param1, param2) {
    console.log(`${param1} ${param2}`);
};
// argument is parameters value
funcName("hi", "rayhan");
funcName("hello", "everyone");


// * returning from function
// All functions in JavaScript return `undefined` by default if the programmer doesn't explicitly return anything.
// A function can return a value using the `return` statement.
// When a `return` statement is executed, the function stops running, and no further code inside that function is executed.

function sum(a, b) {
    return a + b;
}
const jog = sum(5, 6);
console.log(jog);


// * default parameter
function add(a = 0, b = 0) {
    /*if (a == undefined) {
        a = 0;
    }
    if (b == undefined) {
        b = 0;
    }*/

    return a + b;
};
const jogfol = add(5);
console.log(jogfol);


// * rest parameter
function collection(x, ...y) {
    console.log(x);
    console.log(y);
};
collection(1,2,3,4,5,6,7,8,9,10);


// arrow function
const arrowFunc = (a, b) => a + b;
console.log(arrowFunc(5, 15));


const arrowFunc1 = (x,y) => {
    return x + y;
};
console.log(arrowFunc1(5, 15)); 


// this & regular function _ arrow function

// regular function
// The this keyword in JavaScript is special—its value depends on how and where the function is executed, especially for regular functions.
function x() {
    console.log("x", this);
}
x();
const obj = {
    items: 12
};
obj.fun = x;
obj.fun();



// arrow function
const y = () => {
    console.log("y", this);
}
y();
const obje = {
    items: 22
};
obje.func = y;
obje.func(); 


// nested function
function outerFunction() {
    console.log("Outer Function");

    function innerFunction() {
        console.log("Inner Function");
    }
    innerFunction();
}
outerFunction()


// Scope & Closure
function outer(x) {
    console.log("Outer");
    function inner() {
        console.log("Inner");
        return x * 5;
    }
    return inner;
};
const result = outer(5);
console.log(result());


// callback function
function foo(buz) {
    if (true) {
        buz();
    }
}

function buz() {
    console.log("buz");
}
foo(buz);


// Higher-Order Function
function getCapture(camera) {
    camera();
}
function camera() {
    console.log("canon");
}
getCapture(camera);



function returnFunc(massage1) {
    return function (massage2) {
        console.log(massage1, massage2);
    }
}
returnFunc("hello")("world");




// IIFE

(function (massage) {
    console.log(massage);
})("hello")



// recursion function
/*
function recurse() {
    if (base_condition) {
        *stop the recursion
        return;
    }
    recurse();
}
*/

function fetchWater(count) {
    if (count == 0) {
        return;
    }
    console.log("Fetching Water...", count);
    fetchWater(count -1);
};
fetchWater(5);



function factorial(num) {
    if (num === 0) {
        return 1;
    }
    return num * factorial(num -1);
};
const resultF = factorial(5);
console.log(resultF);



function sumOfDigits(num) {
    if (num === 0) {
        return 0;
    }else{
        return num + sumOfDigits(num - 1);
    };

}
const result2 = sumOfDigits(20);
console.log(result2);



