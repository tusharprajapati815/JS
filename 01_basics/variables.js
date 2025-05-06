const accountId = 14423; //Cannot be changed once declared
let accountEmail = "example@gmail.com"; 
var accountPassword = "P@ssword_144";
accountCity = "Bhiwandi";
let accountState; //Undefined.

//accountId = 2; //TypeError: Assignment to constant variable.
accountEmail = "example2@gmail.com";
accountPassword = "P@ssword_testassignment";
accountCity = "Bengaluru";

/*
Prefer not to use var,
because of the issue in block scope and functional scope.
*/

console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);
