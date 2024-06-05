/*

let x = 250 ;
create variable Calculate the value of zakat for x ,If you know the percentage of zakat = 2.5 %; 

*/
let x = 250;
let zakatPerc = 2.5;
let zakat = (x * zakatPerc) / 100;
console.log(zakat); // Output= 6.25

/*
Array Tasks : 
1
Correct the syntax error
 [ 1,7  9  45, ]

 ["Str" "alex","moh"

 'the','fox' 'over' lazy, 'dog',  ]

*/

// Corrected arrays
let array01 = [1, 7, 9, 45];
let array02 = ["Str", "alex", "moh"];
let array03 = ["the", "fox", "over", "lazy", "dog"];

/*
2
What the index of "Banana","Tomato"
var fruits=["Tomato","Banana","Watermelon"]

*/

var fruits = ["Tomato", "Banana", "Watermelon"];
console.log(fruits.indexOf("Banana")); // Output= 1
console.log(fruits.indexOf("Tomato")); // Output= 0

/*
3
Create an array represents your:
1- Favorite Food (2)
2- Favorite Sport (3)
3- Favorite Movie (2)
*/

let favoriteFood = ["mansaf", "burger"];
let favoriteSport = ["snowboarding", "running", "swimming"];
let favoriteMovie = ["little women", "The Matrix"];

/*
4
Create a Variable to return the first element in an array 
Ex: firstOfArray([1,4,5]) => 1
Ex: firstOfArray(["t","u","g","x"]) => "t"
*/

function firstOfArray(arr23) {
  return arr23[0];
}

console.log(firstOfArray([1, 4, 5])); // Output= 1
console.log(firstOfArray(["t", "u", "g", "x"])); // Output= "t"

/*
5
Create a Variable to return the lastOfArray element in an array 

Ex: lastOfArray([1,4,5]) => 5
Ex: lastOfArray(["t","u","g","x"]) => "x"
*/

function lastOfArray(arr) {
  return arr[arr.length - 1];
}

console.log(lastOfArray([1, 4, 5])); // Output= 5
console.log(lastOfArray(["t", "u", "g", "x"])); // Output= "x"

/*
6
Using console make this array to be like this one (push, unshift, shift, pop)

var array = [0,5,7,9]
=> [1,3,4,6,8,9,10]
*/
const arr00 = [0, 5, 7, 9];
arr00.shift();
arr00.shift();
arr00.shift();
arr00.unshift(1, 3, 4, 6, 8);
arr00.push(10);
console.log(arr00);

/*
7
Using the console try to figure out what the thing thats (push, unshift, shift, pop) return to you

var array2 = [5,9,-7,3.5]
*/

var array2 = [5, 9, -7, 3.5];
var xx = array2.shift();
var xy = array2.unshift();
var xz = array2.pop();
var xd = array2.push();
console.log(xx, xy, xz);

/*
8.
Write a JavaScript program to sort the items of an array.
Sample array : var arr1 = [ -3, 8, 7, 6, 5, -4, 3, 2, 1 ];
Sample Output : -4,-3,1,2,3,5,6,7,8
*/

var arr7 = [-3, 8, 7, 6, 5, -4, 3, 2, 1];
arr7 = arr7.map((value) => value + 4);
arr7.sort();
arr7 = arr7.map((value) => value - 4);
console.log(arr7);
