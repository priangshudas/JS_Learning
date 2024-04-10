console.log(c); //hoisting only in case of "var"

let a = 10;
const b = 20;
var c = 30;

console.log(a, b, c);

if (true) {
  var c = 40; //var does not follow the scope
  let b = 50;
  console.log(c, b);
}

console.log(c, b);

function one() {
  const username = "hitesh";

  function two() {
    const website = "youtube";
    console.log(username);
  }
  // console.log(website);

  two();
}

// one()

if (true) {
  const username = "hitesh";
  if (username === "hitesh") {
    const website = " youtube";
    // console.log(username + website);
  }
  /* The line `// console.log(website);` is a commented-out code in JavaScript. This means that this
  line of code is not executed when the program runs. It is used for adding comments or temporarily
  disabling code without deleting it. In this case, the line is commented out to prevent an error
  since the variable `website` is declared inside the `two()` function and is not accessible outside
  of it. */
  // console.log(website);
}

// console.log(username);

// ++++++++++++++++++ interesting ++++++++++++++++++

console.log(addone(5));

function addone(num) {
  return num + 1;
}

addTwo(5);
const addTwo = function (num) {
  return num + 2;
};
