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
// const inputYear = "1991";
// console.log(Number(inputYear), inputYear);
// console.log(Number(inputYear) + 18);

// console.log(Number("safu"));
// console.log(typeof NaN);
// console.log(String(23), 23);

// console.log("i am " + 23 + " years old"); // + convert to string
// console.log("23" - "10" - 3); // - convert to numbers
// console.log("23" * "2"); // - convert to numbers
// console.log(23 / "34"); // - convert to numbers

// let n = "2" + 1;
// n = n - 1;
// console.log(n);

////////////////////////////////////
// Truthy and Falsy Values

// 5 falsy values are: 0, '', null, undefiend, NaN
// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean(null));
// console.log(Boolean(""));
// console.log(Boolean(NaN));
// rare to use all this
// const money = 1;
// if (money) {
//   console.log("don't spend it all");
// } else {
//   console.log("you should get a job!");
// }
// let height;
// if (height) {
//   console.log("wow! height is defined");
// } else {
//   console.log("height is not defined");
// }
////////////////////////////////////
// Equality Operators: == vs. ===

// const age = 18;
// if (age === 18) {
//   console.log("you just be come an adult :D (strict)");
// }
// if (age == 18) {
//   console.log("you just become an adult(looose)");
// }
// const favouriteNumber = Number(prompt("whats your favourite number"));
// console.log(favouriteNumber);
// console.log(typeof favouriteNumber);
// if (favouriteNumber == 23) {
//   console.log("cool! 23 is an amazing number");
// } else if (favouriteNumber == 7) {
//   console.log("7 is also cool number");
// } else {
//   console.log("oops neither 7 nor 23");
// }
////////////////////////////////////
// Logical Operators
// const hasDriverLicence = false;
// const hasGoodVision = true;
// console.log(hasDriverLicence && hasGoodVision);
// console.log(hasDriverLicence || hasGoodVision);
// console.log(!hasDriverLicence);
// const shouldDrive = hasDriverLicence && hasGoodVision;
// if (shouldDrive) {
//   console.log("sara is able to drive ");
// } else {
//   console.log("someone else should drive...");
// }
// const isTired = true;
// console.log(hasDriverLicence || hasGoodVision || !isTired);

////////////////////////////////////
// Coding Challenge #3

/*
There are two gymnastics teams, Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins the a trophy!

1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition, and print it to the console. Don't forget that there can be a draw, so test for that as well (draw means they have the same average score).

3. BONUS 1: Include a requirement for a minimum score of 100. With this rule, a team only wins if it has a higher score than the other team, and the same time a score of at least 100 points. HINT: Use a logical operator to test for minimum score, as well as multiple else-if blocks 😉
4. BONUS 2: Minimum score also applies to a draw! So a draw only happens when both teams have the same score and both have a score greater or equal 100 points. Otherwise, no team wins the trophy.

TEST DATA: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
TEST DATA BONUS 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
TEST DATA BONUS 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106

GOOD LUCK 😀
*/

// const scoreDolphins = (98 + 108 + 89) / 3;
// const scoreKoalas = (88 + 91 + 110) / 3;
// console.log(scoreDolphins);
// console.log(scoreKoalas);
// if (scoreDolphins > scoreKoalas) {
//   console.log("dolphins win tropy 🏆🏆🏆🏆");
// } else if (scoreKoalas > scoreDolphins) {
//   console.log("koalas win the tropy 🏆🏆🏆🏆");
// } else if (scoreDolphins === scoreKoalas) {
//   console.log("Both win the tropy");
// }
// BONUS 1
const scoreDolphins = (97 + 112 + 80) / 3;
const scoreKoalas = (109 + 95 + 86) / 3;
console.log(scoreDolphins, scoreKoalas);

if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
  console.log("Dolphins win the trophy 🏆");
} else if (scoreKoalas > scoreDolphins && scoreKoalas >= 100) {
  console.log("Koalas win the trophy 🏆");
} else if (
  scoreDolphins === scoreKoalas &&
  scoreDolphins >= 100 &&
  scoreKoalas >= 100
) {
  console.log("Both win the trophy!");
} else {
  console.log("Ooops!! No one wins the trophy 😭");
}
