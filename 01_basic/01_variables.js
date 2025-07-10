const accountId=14453
let accountEmial="sagar12@gmail.com"
var accountPassword="12345"
accountCity="Delhi"

let accountState;
//agr bina koi value assign kr chod de gya to ye 'undefined' show kara ga

accountEmial="hc@hc.com"
acccountPassword="234234"
accountCity="Jaipur"
//accountId=2 //not allowed

console.log(accountId);

/*
Hum 'var' keyword ko use nhi krte hai
bcz of issue in block scope and funtional scope
*/

//hume bar bar console.log likhn na padega print ki liya isliya hum ek new chiz use kr ye gya
console.table([accountId,accountEmial,acccountPassword,accountCity,accountState]);