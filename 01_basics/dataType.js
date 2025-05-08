"use strict"; //Treat all the JS code as newer version of JS.

/*
alert(3 + 3) alert can't be used in the nodejs, it can in the browser.
*/

let name = "xyz";
let age = 18
let isLoggedIn = false

/* 
Datatypes:-
1. Primitive Datatypes
number : 2 to power of 53
bigint
string : '' and ""
boolean : true and false
null : standalone value (using typeof on null it shows object), typeof of null is object.
undefined : value not assigned (using typeof on undefined it shows undefined. Since, it is a type itself)
symbol : uniqueness, mostly used in react and figma

2. Non-Primitive Datatype => object, Array, Functions(typeof is function, but consider as function object).
*/

console.log(typeof undefined)
