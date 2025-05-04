// Task 1: Declare variables for a person’s name, age, isStudent status, and favorite programming language.
let name = "Alif Rayhan";
let age = 25;
let isStudent = true;
let favProLan = "Javascript";

// Task 2: Print the values to the console.
console.log(name, age, isStudent, favProLan);
console.log(typeof (name, age, isStudent, favProLan)); 

// Task 3: Try reassigning values to let and const variables and observe errors.
let firstName = "Alif";
firstName = "Rayhan";
console.log(firstName);

const lastName = "Rayhan";
// lastName = "Alif";  // TypeError: Assignment to constant variable.
console.log(lastName);

// Task 4: Create an object and an array, assign them to new variables, modify, and observe changes.
const object = {
    name: "alif",
    age: 25
};
newObject = object;
newObject.age = 26;
console.log(newObject);


const array = [10, 20, 30];
newArray = array;
newArray[0] = 12;
console.log(newArray);
console.log(newArray === array);