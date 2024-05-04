//CONDITIONAL/TURNURY OPERATORS
// "?" , ":"

// RELATIONAL OPERATORS
// "<",">","<=",">=","==","!=","===","!=="

// LOGICAL OPERATORS
// "&&" , "||" , "!"

// CONDITIONAL STATEMENTS(Ensure Control Flow)

if (false) {
  console.log("hello");
} else {
  console.log("world");
}

const temp = 8;
if (temp > 40) {
  // If is used to check the first condition
  console.log("dont go outside");
} else if (temp > 30) {
  // Else if is used to check multiple conditions
  console.log("it's hot outside");
} else if (temp > 20) {
  console.log("it's warm outside");
} else {
  // Else is used to check the last condition
  console.log("it's cold outside");
}

const userloogedIn = true;
const userDebitCard = true;

if (userloogedIn && userDebitCard) {
  console.log("you can shop");
}

//Implicit Scope
const bal = 1000;

if (bal > 500) console.log("ameer hai sala"), console.log("and kanjus bhi!");

const googleSignIn = true;
const emailSignIN = true;

if (googleSignIn || emailSignIN) {
  console.log("user loggged in");
} else {
  ("please choose a method");
}

const mangoPrice = 80;

mangoPrice <= 100 ? console.log("buy mango") : console.log("dont buy mango");
