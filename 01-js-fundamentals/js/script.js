// values and variables
// let firstName = "safu";
// console.log(firstName);
//Variable name conventions
// let safu_mulatu = "sm";
// let $function = 27;

// let person = "safu";
// let PI = 3.1415;

// let myFirstJob = "Coder";
// let myCurrentJob = "student"; //camelcase

// let job1 = "programmer";
// let job2 = "student";

// console.log(myFirstJob);
////////////////////////////////////
// Data Types
/*
let javascriptIsFun = true;
console.log(javascriptIsFun);

// console.log(typeof true);
console.log(typeof javascriptIsFun);
console.log(typeof 23);
console.log(typeof "Jonas");

javascriptIsFun = "YES!";
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);

console.log(typeof null);


///////////////////////////////////
// let, const and var
let age = 30;
age = 31;

const birthYear = 1991;
// birthYear = 1990;
// const job;

var job = "programmer";
job = "teacher";

lastName = "kura";
console.log(lastName);
*/
///////////////////////////////////////////
// operators
// const now = 2024;
// const myAge = now - 2001;
// const saraAge = now - 2000;
// console.log(myAge, saraAge);
// console.log(myAge * 2, myAge / 2, saraAge / 10, 2 ** 3);
// const firstName = "safu";
// const lastName = "mulatu";
// console.log(firstName + " " + lastName);
// let x = 10 + 4;
// x += 10; // x = x + 10
// x *= 4;
// x++;
// x--;
// --x;
// console.log(x);

// // comparision operator
// console.log(myAge <= saraAge); // <,>,=
// console.log(saraAge >= 19);

// console.log(now - 1991 > now - 1992);

////////////////////////////////////
// Coding Challenge #1

/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter).

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both versions)
3. Create a boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.

TEST DATA 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
TEST DATA 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.

GOOD LUCK 😀
*/
// solution for firs

// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;

// solution for second
// const massMark = 95;
// const heightMark = 1.88;
// const massJohn = 85;
// const heightJohn = 1.76;

// const BMImark = massMark / heightMark ** 2;
// const BMIjohn = (massMark / heightJohn) * heightJohn;
// console.log(BMIjohn, BMImark);

// // comparing them
// console.log(BMIjohn > BMImark);
// console.log(BMIjohn < BMImark);
// console.log(BMIjohn == BMImark);

////////////////////////////////////
// Strings and Template Literals
// const firstName = "safu";
// const job = "programmer!";
// const birthDay = 2001;
// const year = 2024;
// const safu = "i am " + firstName + " a" + (year - birthDay) + "years old" + job;
// console.log(safu);
// // easy pizzy with template literal
// const safuyyee = `i am ${firstName} and ${
//   year - birthDay
// } years old and my occupetion is ${job}`;
// console.log(safuyyee);
// console.log(`just as regular string....`);
// console.log("multi\n lines\n lateral with normal\n");
// console.log(`multiple
// lines`);

////////////////////////////////////
// Taking Decisions: if / else Statements
// const age = 15;
// if (age >= 18) {
//   console.log("you can start driving licence 🚗🚗🚗");
// } else {
//   console.log(
//     `you can't start your driving licence in case of your age 🤭🤭🤭`
//   );
// }
// const birthYear = 2001;
// let century;
// if (birthYear <= 2000) {
//   century = `the 20 century`;
// } else {
//   century = `the 21 century`;
// }
// console.log(century);
////////////////////////////////////
// Coding Challenge #2

/*
Use the BMI example from Challenge #1, and the code you already wrote, and improve it:

1. Print a nice output to the console, saying who has the higher BMI. The message can be either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's BMI (28.3) is higher than John's (23.9)!"

HINT: Use an if/else statement 😉

GOOD LUCK 😀
*/
// const massMark = 95;
// const heightMark = 1.88;
// const massJohn = 85;
// const heightJohn = 1.76;

// const BMImark = massMark / heightMark ** 2;
// const BMIjohn = (massMark / heightJohn) * heightJohn;
// console.log(`BMIjohn ${BMIjohn}`);
// console.log(`BMImark ${BMImark}`);
// if (BMImark > BMIjohn) {
//   console.log(`Mark's BMI is higher than John's!`);
// } else {
//   console.log(`John's BMI is higher than Mark's!`);
// }
////////////////////////////////////
// Type Conversion and Coercion
const inputYear = "1991";
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number("safu"));
console.log(typeof NaN);
console.log(String(23), 23);

