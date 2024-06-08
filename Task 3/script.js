/*
1
Write a function named tellFortune that:
takes 4 arguments: number of children,
partner's name, geographic location, job title.
outputs your fortune to the screen like so:
"You will be a X in Y, and married to Z with N kids."

Ex: tellFortune('software engineer', 'Jordan', 'Alice', 3);
=> "You will be a software engineer in Jordan, and married to Alice with 3 kids."
*/
function tellFortune(
  jobTitle,
  geographicLocation,
  partnerName,
  numberChildren
) {
  const fortune = `You will be a ${jobTitle} in ${geographicLocation}, and maried to ${partnerName} with ${numberChildren}.`;
  console.log(fortune);
}
tellFortune(`software engineer`, `Jordan`, `Alice`, 3);
//================================End===========================================//

// 2
// Write a function named calculateDogAge that:
// takes 1 argument: your puppy's age.
// calculates your dog's age based on the conversion
// rate of 1 human year to 7 dog years.
// outputs the result to the screen like so:
// "Your doggie is NN years old in dog years!"

// Ex: calculateDogAge(1);
// => "Your doggie is 7 years old in dog years!"
// */
function calculateDogAge(puppyAge) {
  const dogAge = puppyAge * 7;
  const messge = `your doggie is ${dogAge} years old in dog years!`;
  console.log(messge);
}

calculateDogAge(1);
//================================End===========================================//

/*
3
Write a function named calculateSupply that:
takes 2 arguments: age, amount per day.
calculates the amount consumed for rest of the life (based on a constant max age 100).
outputs the result to the screen like so:
"You will need NN to last you until the ripe old age of X"

Ex: calculateSupply(30, 3);
=> 'You will need 76650 cups of tea to last you until the ripe old age of 100;
*/

function calculateSupply(age, amountPerDay) {
  const maxAge = 100;
  yearsLeft = maxAge - age;
  daysLeft = yearsLeft * 365;
  total = daysLeft * amountPerDay;
  const message = `You will need ${total} cups of tea to last you until the ripe old age of 100`;
  console.log(message);
}
calculateSupply(30, 3);
//================================End===========================================//

/*
4
Write a function called greet that:
takes 1 argument: name.
and it will return hello + name

Ex: greet("Adam")
=> "Hello Adam"
*/

function greet(name) {
  return `Hello ${name}`;
}
console.log(greet("Adam"));
//================================End===========================================//

// 5
// what is the error:
// function double(cat) {
//   return 2 * x; >>>>>>>>>>> x undefined
// }

// function double(7) {
//   return 2 * 7; >>>>>>>>>>>>>>>>7 is not a valid parameter name
// }

// function double('7') {
//   return 2 * 'x'; >>>>>>>>>>>>> 7' is not a valid parameter name and 'x'  undefined
// }

//solution
function double1(x) {
  return 2 * x;
}
console.log(double1(7));
console.log(double1("7"));
console.log(double1(2));
//================================End===========================================//
// 6
// fix these functions:
// func double1(x {
//   return 2 * x ;
// }

// functiondouble2 x)
// return 2 * x;
// }

// function (x) double3 {
//   return 2 * x;

// */

// /* solution
function double1(x) {
  return 2 * x;
}
function double2(x) {
  return 2 * x;
}
function double3(x) {
  return 2 * x;
}
//================================End==============================
/*
7
Write a function called cube that:
accept 1 parameter and calculate the cube of this number

Ex: cube(4)
=> 64
*/
function cube(x) {
  return x ** 3;
}
console.log(cube(4));
console.log(cube(9));
//================================End==============================
/*
8
Write a function called multiply that:
accept 2 parameters and calculate the multiply of these 2 numbers

Ex: multiply(3,4)
=> 12
Ex: multiply(5,4)
=> 20
*/
function multiply(x, y) {
  return x * y;
}
console.log(multiply(3, 4));
console.log(multiply(5, 4));
//================================End==============================

/*
9
Write a function called canIGetADrivingLicense that:
accept 1 parameter represent the age
and if the age greater than or equal to 20 return "yes you can"
otherwise return "please come back after X years to get one"

Ex: canIGetADrivingLicense(21)
=> "yes you can"

Ex: canIGetADrivingLicense(17)
=> "please come back after 3 years to get one"

Ex: canIGetADrivingLicense(20)
=> "yes you can"

*/
function canIGetADrivingLicense(age) {
  if (age >= 20) {
    return "yes you can";
  } else {
    let waitbe = 20 - age;
    return "please come back after" + " " + waitbe + " years to get one";
  }
}
console.log(canIGetADrivingLicense(21));
console.log(canIGetADrivingLicense(17));
console.log(canIGetADrivingLicense(20));
//================================End==============================

/*
10
Write a function called sameLength
that accepts two strings as arguments,
and returns true if those strings have the same length, and false otherwise.

**hint: how we can know string length   Ex: : "tree".length   => 4

Ex: sameLength("tree","clue")
=> true

Ex: sameLength("tree","car")
=> false
*/

function sameLength(st1, st2) {
  return st1.length === st2.length;
}
console.log(sameLength("tree", "car"));
console.log(sameLength("tree", "clue"));
//================================End==============================
/*
11
Write a function called largerNubmer
that accept two numbers as arguments,
and return the first larger numbers

Ex: largerNubmer(5,6)
=> 6

Ex: largerNubmer(5,3)
=> 5
*/

function largerNubmer(x, y) {
  return x > y ? x : y;
}
console.log(largerNubmer(5, 6));
console.log(largerNubmer(5, 3));
//================================End==============================
/*
12
Write a function called smallerNubmer
that accept three numbers as arguments,
and return the first smaller number

Ex: smallerNubmer(8,6,7)
=> 6

Ex: smallerNubmer(5,99,34)
=> 5

Ex: smallerNubmer(5,99,3)
=> 3

Ex: smallerNubmer(5,3,3)
=> 3

*/
function smallerNubmer(x, y, z) {
  return Math.min(x, y, z);
}
console.log(smallerNubmer(8, 6, 7));
console.log(smallerNubmer(5, 99, 34));
console.log(smallerNubmer(5, 99, 3));
console.log(smallerNubmer(5, 3, 3));
//================================End==============================

/*
13
Write a function called shorterString
that accept five string as an arguments,
and return the first shorter string

Ex: shorterString("air","school","car","by","github")
=> by

Ex: shorterString("air","tr","car","by","github")
=> tr

Ex: shorterString("by","tr","car","air","github")
=> by

Ex: shorterString("air","by","car","school","github")
=> by

Ex: shorterString("air","tr","by","car","github")
=> by

Ex: shorterString("air","tr","car","github","by")
=> by

*/
function shorterString(st1, st2, st3, st4, st5) {
  const lengths = [st1.length, st2.length, st3.length, st4.length, st5.length];
  const shortest = Math.min(...lengths);
  const shorterStrings = [st1, st2, st3, st4, st5].filter(
    (st) => st.length === shortest
  );
  return shorterStrings[0];
}
console.log(shorterString("air", "school", "car", "by", "github"));
console.log(shorterString("air", "tr", "car", "by", "github"));
console.log(shorterString("by", "tr", "car", "air", "github"));
console.log(shorterString("air", "by", "car", "school", "github"));
console.log(shorterString("air", "tr", "car", "github", "by"));
//================================End==============================
/*
14
Write a function called longerString
that accept four string as an arguments,
and return the first longer string

Ex: longerString("air","school","car","github")
=> school

Ex: longerString("air","schoo","car","github")
=> github

try all the cases (change the order of the longestString)
*/
function longerString(st1, st2, st3, st4) {
  const lengths = [st1.length, st2.length, st3.length, st4.length];
  const longer = Math.max(...lengths);
  const longerStrings = [st1, st2, st3, st4].filter(
    (st) => st.length === longer
  );
  return longerStrings[0];
}
console.log(longerString("air", "school", "car", "github"));
console.log(longerString("air", "schoo", "car", "github"));
//================================End==============================

/*
15
Write a function called isEven
that accept 1 argument as a number,
and return true if this number is even
and false if this number is odd

Ex: isEven(1)
=> false
Ex: isEven(2)
=> true

*/
function isEven(x) {
  return x % 2 == 0;
}
console.log(isEven(1));
console.log(isEven(2));
//================================End==============================
/*
16
Write a function called isOdd
that accept 1 argument as a number,
and return true if this number is Odd
and false if this number is Even

Ex: isOdd(4)
=> false
Ex: isOdd(5)
=> true

*/
function isOdd(y) {
  return y % 2 !== 0;
}
console.log(isOdd(4));
console.log(isOdd(5));
//================================End==============================

/*
17
Write a function called positive
that accept 1 argument as a number,
and return the positive version of the number passed

Ex: positive(4)
=> 4
Ex: positive(-5)
=> 5

*/
function positive(x) {
  return Math.abs(x);
}
console.log(positive(4));
console.log(positive(-5));
//================================End==============================

/*
18
Write a function called fullName
that accept two parameters, firstName and lastName,
and returns the firstName and lastName concatenated
together with a space in between.

Ex: fullName("Adam","McCallen")
=> "Adam McCallen"
Ex: fullName("Alex", "Mercer")
=> "Alex Mercer"
*/
function fullName(firstName, lastName) {
  return firstName + " " + lastName;
}
console.log(fullName("Lujain", "Alazzam"));
console.log(fullName("Deema", "Ahmad"));
//================================End==============================

/*
19
Write a function called average
that takes five numbers as inputs
and returns the average of those numbers.

Ex: average(1,2,3,4,5)
=> 3

Ex: average(5,7,9,3,5)
=> 5.8

*/
function average(x, y, z, l, k) {
  const sum = x + y + z + l + k;
  return sum / 5;
}
console.log(average(1, 2, 3, 4, 5));
console.log(average(5, 7, 9, 3, 5));
//================================End==============================
/*
20
Write a function called randomNumber
that didnt takes any parameter
and returns a random number between 0-1
** hint: you can seacrh using MDN

Ex: randomNumber()
=> 0.2278

Ex: randomNumber()
=> 0.475

*/
function randomNumber() {
  return Math.random();
}
console.log(randomNumber());
console.log(randomNumber());
//================================End==============================
/*
21
Write a function called randomBetweenNumbers
that takes 2 parameters
and returns a random number between them
** hint: you can seacrh using MDN

Ex: randomBetweenNumbers(1,8)
=> 7.5412

Ex: randomBetweenNumbers(3,100)
=> 23

*/
function randomBetweenNumbers(x, y) {
  return Math.random() * (y - x) + x;
}
console.log(randomBetweenNumbers(1, 8));
console.log(randomBetweenNumbers(3, 100));
//================================End==============================

/*
22
Write a function called scoreInUniversty
that takes 1 parameters
and returns the alpabet in the unevirsty
A => 95-100
B => 85-94
C => 70-84
D=> 50-69
F=> 0-49

Ex: scoreInUniversty(96)
=> "A"

Ex: scoreInUniversty(3)
=> "F"

Ex: scoreInUniversty(71)
=> "C"
*/
function scoreInUniversty(x) {
  return x >= 95 ? "A" : x >= 85 ? "B" : x >= 70 ? "C" : "F";
}
console.log(scoreInUniversty(96));
console.log(scoreInUniversty(3));
console.log(scoreInUniversty(71));
//================================End==============================

/*
23
Write a function called counter
that will returns a number bigger
than the one that returnd before
and start from 0

Ex: counter()
=> 1

Ex: counter()
=> 2

Ex: counter()
=> 3

*/
function counter() {
  let value = 0;
  return function increase() {
    value++;
    console.log(value);
    return value;
  };
}
const increaseCounter = counter();
increaseCounter();
increaseCounter();
increaseCounter();
increaseCounter();
//================================End==============================
/*
24
Write a function called resetCounter
that will reset the previuos function
and return the number before reset and
a string say that the counter reset

Ex: counter()
=> 1

Ex: counter()
=> 2

Ex: counter()
=> 3

Ex: resetCounter()
=> 3 and the counter reset now

Ex: counter()
=> 1

Ex: counter()
=> 2

Ex: resetCounter()
=> 2 and the counter reset now

Ex: counter()
=> 1
*/
function counterr() {
  let valuee = 0;
  let preValue = 0;
  function increasee() {
    valuee++;
    console.log(valuee);
    return valuee;
  }
  function resetCounter() {
    preValue = valuee;
    valuee = 0;
    console.log(`${preValue} and the counter rest now`);
    return preValue;
  }
  return { increasee, resetCounter };
}
const { increasee, resetCounter } = counterr();
increasee();
increasee();
increasee();
resetCounter();
increasee();
//================================End==============================
