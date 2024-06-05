/* 1. Write a JavaScript program that accept two integers and
 * display the larger.Go to the editor */
/******* Start Your Code *********/

function large(num1, num2) {
  if (num1 > num2) {
    return `The larger number is ${num1}`;
  } else if (num2 > num1) {
    return `The larger number is ${num2}`;
  } else {
    return "Both numbers are equal";
  }
}

console.log(large(20, 30));
/******* End Your Code ********* */

/* 2. Write a JavaScript conditional statement to find the sign
 of product of three numbers. Display an alert box with the 
 specified sign. Go to the editor 
Sample numbers : 3, -7, 2 
Output : The sign is - */
/******* Start Your Code *********/
function Sign(n1, n2, n3) {
  let product = n1 * n2 * n3;
  if (product > 0) {
    alert("The sign is +");
  } else if (product < 0) {
    alert("The sign is -");
  } else {
    alert("The product is 0");
  }
}

Sign(3, -7, 2);
/******* End Your Code ********* */

/* 3. Write a JavaScript conditional statement to sort three numbers. Display an alert box to show the result. Go to the editor 
Sample numbers : 0, -1, 4 
Output : 4, 0, -1 */
/******* Start Your Code *********/
function sortNum(nu1, nu2, nu3) {
  let numbers = [nu1, nu2, nu3];

  numbers.sort(function (a, b) {
    return b - a;
  });

  alert(`The sorted numbers are: ${numbers[0]}, ${numbers[1]}, ${numbers[2]}`);
}
sortNum(0, -1, 4);

/******* End Your Code ********* */

/*4. Write a JavaScript conditional statement to find the largest of five numbers. 
Display an alert box to show the result. Go to the editor 
Sample numbers : -5, -2, -6, 0, -1 
Output : 0 */

/******* Start Your Code *********/

function Largest(num1, num2, num3, num4, num5) {
  let largestt = num1;

  if (num2 > largestt) {
    largestt = num2;
  }
  if (num3 > largestt) {
    largestt = num3;
  }
  if (num4 > largestt) {
    largestt = num4;
  }
  if (num5 > largestt) {
    largestt = num5;
  }

  alert(`The largest number is: ${largestt}`);
}
Largest(-5, -2, -6, 0, -1);

/******* End Your Code ********* */

/* 5.Write the if statement to display "Hello World" if x is greater than y, otherwise alert "Goodbye".*/
/******* Start Your Code *********/

let x = 10;
let y = 5;

if (x > y) {
  console.log("Hello World");
} else {
  alert("Goodbye");
}

/******* End Your Code ********* */

/* 1. Write a JavaScript program that returns rate as text
less than 50 return ==> Fail
equal or between 50 and 59 ===> E
equal or between 60 and 69 ===> D
equal or between 70 and 79 ===> C
equal or between 80 and 89 ===> B
equal or between 90 and 100 ===> A
*/

/******* Start Your Code *********/
function rateToText(rate) {
  return rate < 50
    ? "Fail"
    : rate <= 59
    ? "E"
    : rate <= 69
    ? "D"
    : rate <= 79
    ? "C"
    : rate <= 89
    ? "B"
    : rate <= 100
    ? "A"
    : "Invalid rate";
}

console.log(rateToText(45)); // Output: Fail
console.log(rateToText(55)); // Output: E
console.log(rateToText(65)); // Output: D
console.log(rateToText(75)); // Output: C
console.log(rateToText(85)); // Output: B
console.log(rateToText(95)); // Output: A
console.log(rateToText(105)); // Output: Invalid rate

/******* End Your Code ********* */

// 1. Write a JS code to print numbers from 1 to 10
/******* Start Your Code *********/

for (let i = 1; i <= 10; i++) {
  console.log(i);
}
/******* End Your Code ********* */

/*2. Write a JS code to print Even numbers in arr :
   var arr = [13,23,12,45,22,48,66,100]
*/
/******* Start Your Code *********/
var arr = [13, 23, 12, 45, 22, 48, 66, 100];

for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 2 === 0) {
    console.log(arr[i]);
  }
}
/******* End Your Code ********* */

/* 
3. Write a JS code to print a pattern using for loop

   1 
   1 2 
   1 2 3 
   1 2 3 4 
   1 2 3 4 5 
   1 2 3 4 5 6 
   1 2 3 4 5 6 7 
   1 2 3 4 5 6 7 8 

*/
/******* Start Your Code *********/

const Rows = 8;

// Outer loop for rows
for (let i = 1; i <= Rows; i++) {
  let pattern = "";

  // Inner loop for elements in each row
  for (let j = 1; j <= i; j++) {
    pattern += j + " ";
  }

  console.log(pattern);
}
/******* End Your Code ********* */

/* 
 Check if a string contains the letter “y”. Print “yes” if it does and “no” if it does not.
let x = "don’t know why"

*/
/******* Start Your Code *********/
let l = "Im going to loose my mind";

if (l.includes("y")) {
  console.log("yes");
} else {
  console.log("no");
}
/******* End Your Code ********* */
