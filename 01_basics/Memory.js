/*
Types of Memory in JS:
1. STACK: 
a) In primitive datatype, the stack memory is used.
b) Whatever variable declared here you will get a copy of it.
2. HEAP: 
a) In non-primitive datatype, the heap memory is used.
b) Whatever variable declared here you will get a reference of the original variable.
*/

let mySocialMediaName = "Kalyug";

let anotherName = mySocialMediaName; //Here the copy of the mySocialMediaName is present. So, when changing the anotherName we are not changing the original value.
anotherName = "Tussh";

console.log(mySocialMediaName); //Kalyug
console.log(anotherName); //Tussh

let userOne = {
    email: "user@google.com",
    upiId: "user@ybl"
}

let userTwo = userOne;

userTwo.email = "xyz@google.com"; // Changes the email of userOne as well. Since, it is referencing the original not making a copy of it.

console.log(userOne.email);
console.log(userTwo.email);