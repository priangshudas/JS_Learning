let score = "78abc";
// let score = null;
// let score = undefined;
// let score = true;
// let score = false;
console.log(typeof score);

let scoreInNumber = Number(score); //convertion can be done in from this
console.log(scoreInNumber); //if we try to convert a datatype into non convertable datatype then the output will be "Nan"or"0"or"1"
console.log(typeof scoreInNumber);

let isLoggedIn = 1;
// let isLoggedIn = "";
// let isLoggedIn = "priangshu";
let booleanIsLoggedIn = Boolean(isLoggedIn);
console.table([
  isLoggedIn,
  typeof isLoggedIn,
  booleanIsLoggedIn,
  typeof booleanIsLoggedIn,
]);

let no = 7872;
// let no = true;
// let no = null;
let stringNo = String(no);
console.table([no, typeof no, stringNo, typeof stringNo]);

let value = 3;
let negvalue = -value; // converting a value to a negative value
console.log(negvalue);

let str1 = "Priangshu";
let str2 = " Das";
let str3 = str1 + str2;

console.log(str3);

console.log("1" + 2);
console.log(1 + "2");
console.log("1" + 2 + 2); // always treat from left to right
console.log(1 + 2 + "2");
console.log(+true);
console.log(+"");
//no use of these in production, only for interview purposes

let gameCounter = 100;
++gameCounter; //prefix increment
console.log(gameCounter);
gameCounter++; //postfix increment
console.log(gameCounter);
