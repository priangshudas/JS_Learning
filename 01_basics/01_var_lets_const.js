const accountId = 138394
let accountEmail = "priangshu@gmail.com"
var accountPassword = "123456"
accountCity = "Jhargram"
let accountState
let accountPhone = []
/*
Prefer not to use var
becaause of issue in block scope and fuctional scope
*/

// accountId = 2
console.log(accountId);

accountEmail = "das@gamil.com"
accountPassword = "789"
accountCity = "kolkata"

console.table([accountEmail,accountPassword,accountCity,accountState,accountPhone])