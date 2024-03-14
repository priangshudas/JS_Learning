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
