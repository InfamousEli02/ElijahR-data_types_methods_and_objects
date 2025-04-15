//Number Methods Notes & Exercises

/* 1. Write a function that prompts the user to enter a decimal number, 
rounds it using Math.round(), and displays the result.

Parameters: Decimal number, A method (Math.round())

Results: The input number rounded to the closest integer

Examples: */

let input = prompt("enter a decimal number: ");
let inputNumber = Number(input);
let rounded = Math.round(inputNumber);
console.log(rounded);


/* 2. Write a function that takes an array of decimal numbers and 
creates a new array with all values rounded down using Math.floor().

Parameters: An array of decimal numbers

Results: all values should be rounded down

*/


let arrayNumber = [1.5 , 2.45, 3.6];

let newNum = arrayNumber.map(num => Math.floor(num));

console.log(newNum);


//3. Assume an online store rounds all prices up to the nearest whole number. 
// Convert an array of prices to the nearest whole number using Math.ceil().
/*
Parameters: 
    Input: The input should be an array of decimals. 
    Output: The output should be an array of whole numbers

Results: Array of whole numbers

Examples:
    [4.12, 7.18, 9.56, 10.99]

Psuedocode:
Create a variable that will contain our intital array of prices
I would need to create a loop to go through the array
As the loop is running, I will need to convert each element in the array to a whole number using Math.ceil
I would want to then print the new array with the new elements
*/

const priceArray = [4.12, 7.18, 9.56, 10.99];
const newPriceArray = priceArray.map(value => {
    return Math.ceil(value);
})
console.log(newPriceArray);

//7. Write a function checkIfNumber(value) that:
//Uses isNaN() to check if value is a valid number.
//Logs "Valid number" if it is, otherwise logs "Not a number".

/*
Parameters:
input: value
output: a log if the value is valid or not

Results: a log that says if the value is valid or not

Examples:
checkIfNumber(15) -> "Valid number"
checkIfNumber("Hi") -> "Not a number"

Psuedocode:
create a function called checkIfNumber(value)
I would need to check if value is a number or not using isNaN
log a message based on if the chosen value is a valid number or not
*/


function checkIfNumber(value){
    let isItNaN = isNaN(value);
    if( isItNaN === true){
        console.log("Not a number");
    }else{
        console.log("Valid number");
    }
};

//8. Uses parseFloat() to convert str into a float.
//If the conversion fails (NaN), return "Invalid number".
//Otherwise, return the parsed number.

function floatNum(str){
    if(parseFloat(str) === NaN){
    console.log("Invalid number");
    }else{
        return parseFloat(str);
    }
};
console.log("converted into a float:", floatNum("2.5"));
console.log("converted into a float:", floatNum("5"));
console.log("converted into a float:", floatNum("Hi"));

//9. Write a function convertToInt(str, base = 10) that:
//Uses parseInt() to convert str into an integer.
//Takes an optional second parameter (base) to specify number conversion (default is base 10).
//If conversion fails (NaN), return "Invalid number".

function convertToInt(str, base = 10){
    let intNum = parseInt(str);
    if(intNum === NaN){
        console.log("Invalid number");
        }else{
            return intNum;
        }
};
console.log("converted into an integer:", convertToInt("24.4", base = 10));
console.log("converted into an integer:", convertToInt("22", base = 10));
console.log("converted into an integer:", convertToInt("Yes", base = 10));


//String Methods & Exercises

//10. Ask the user for a word and a number, then display the character at that index 
// (handle out-of-range cases).

// let word = prompt("Enter a word:");
// let number = prompt("Enter a number:");

let word = "Walk";
let number = 1;
console.log(`The character at index '${number}' is: '${word.charAt(number)}' `)

//11. Write a program that asks the user for a sentence and two numbers, 
// then extracts the substring from the first number index to the second.

// let sentence = prompt("Enter a sentence:");
// let number1 = prompt("enter a number:");
// let numbr2 = prompt("Enter another number:");

let sentence = "I want to go home";
let number1 = 3;
let number2 = 5;
console.log(`the substring from '${number1}' to '${number2}' is '${sentence.slice(number1, number2)}'`)


//Array Methods & Exercises

//12. Task: Given an array of temperatures in Celsius, 
// use .map() to create a new array with the temperatures converted to Fahrenheit.

const celsiusTemps = [0, 10, 20, 30, 40];

// Convert to Fahrenheit (F = C * 9/5 + 32)
const fahrenheitTemps = celsiusTemps.map(temp => temp * 9/5 + 32);

console.log(fahrenheitTemps); // Expected output: [32, 50, 68, 86, 104]

//13. Task: Use the .forEach() method to log each element of the array fruits in uppercase. 
// Do not return a new array.

const fruits = ["apple", "banana", "cherry"];
// Your code here
fruits.forEach(function(fruit){
    console.log(fruit.toUpperCase());
});

//15. Task: Use the .filter() method to create a new array containing only 
// the words longer than 5 characters from the words array.

const words = ["apple", "banana", "kiwi", "mango", "strawberry"];
// Your code here
const filteredWords = words.filter(function(word){
    return word.length > 5;
});
console.log(filteredWords);

//16. Task: Create an object called car with the following properties:
//make, model, year, and color
//Use Object.keys() to retrieve the keys of the car object.
//Log the result to the console.
const car = {
    make: "Honda", 
    model: "CR-V", 
    year: "2022", 
    color: "Black"
};
const carObjKeys = Object.keys(car);
console.log(carObjKeys);

//17. Task: Use the same car object from the previous exercise.
//Use Object.values() to retrieve the values of the car object.
//Log the result to the console.
const carValues = Object.values(car);
console.log(carValues);

//18. Task: Use the same car object from the previous exercises.
//Use Object.entries() to retrieve the key-value pairs of the car object.
//Log the result to the console.
const carEntries = Object.entries(car);
console.log(carEntries);

//19. Task: Create a target object called person with the following properties: 
//name: "Alice"
//age: 25
    //Create a source object called details with the following properties:
//age: 30
//city: "New York"
    //Use Object.assign() to merge the details object into the person object.
    //Log the modified person object to the console.

const person = {
    name: "Alice",
    age: "25"
};
const details = {
    age: "30",
    city:"New York"
};
const personObjMerged = Object.assign(person, details);
console.log(personObjMerged);