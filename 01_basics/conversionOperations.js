"use strict";

let score = "xyz";

console.log(typeof score);
console.log(typeof(score));

let valueInNumber = Number(score); //Converting to number.
console.log(typeof(valueInNumber));
console.log(valueInNumber); 

/*
Number:
NaN(Not a Number) for 33aab , 
0 for null, NaN for undefined, 
1 for true & 0 for false and 
for string it is NaN
=> but it's type is number for all of the above. Meaning it is converting them to number.
*/

let isLoggedIn = "xyz";

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(typeof booleanIsLoggedIn)
console.log(booleanIsLoggedIn)

/*
Boolean 
null => false, type: boolean
"" => false, type: boolean
undefined => false, type: boolean
"xyz" => true, type: boolean
33 => true, type: boolean
*/

let someNumber = 33;
let stringNumber = String(someNumber);
console.log(stringNumber);
console.log(typeof stringNumber);

/***********************OPERATION************************* */ 

let value = 3;
let negativeValue = -value;
console.log(negativeValue);

//Operations like +, -, *, /, **, %

let str1 = "hello";
let str2 = " Tushar";
console.log(str1 + str2);

//NOTE: Avoid write code like this and use parenthesis for the operation
// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + 2 + 2); //o/p: 122
// console.log(1 + 2 + "2"); //o/p: 32

//console.log(true)
//console.log(+true) //o/p: 1
//console.log(true+) //ERROR: console.log(true+) SyntaxError: Unexpected token ')'

let gameCounter = 100;
//gameCounter++; //101 POSTFIX-INCREMENT:  
++gameCounter; //101 PREFIX-INCREMENT: 
console.log(gameCounter);
