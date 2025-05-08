"use strict";

// >, <, >=, <=, ==, !=

//Automatic Coversion
console.log("2" > 1); //true 
console.log("02" > 1); //true

//NOTE: AVOID THIS TYPE OF CONVERSION.
console.log(null > 0); //false
console.log(null == 0); //false
console.log(null >= 0); //true

/*
Equality and comparision works DIFFERENTLY.
Comparision converts null to a number, treating it as a 0.
That's why null >= 0 is true and null > 0 is false.
*/


//STRICT CHECK: ===, Check datatype.

