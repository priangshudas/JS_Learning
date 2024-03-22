function sayMyName() {
  console.log("Priangshu Das");
}

sayMyName();

console.log();

// function addTwoNum(a, b) {
//   // functions has parameters
//   console.log(a + b);
// }

function addTwoNum(a, b) {
  // functions has parameters
  // let result = a + b;
  // return result;

  return a + b;

  console.log("Not going to  print after returning");
}

const result = addTwoNum(20, 45); // given values to function is called arguments

console.log("Result: ", result);

function userLoggedInMassage(userName = "Priangshu") {
  if (userName === undefined) {
    console.log("Please enter a user name");
    return;
  }
  return `${userName} just logged in`;
}

// console.log(userLoggedInMassage("Priangshu das"));
console.log(userLoggedInMassage("Soumya"));

function calculateCartPrice(num1, num2, ...restnum) {
  //handle multiple parameters using rest parameter "..."
  return `val1 ${num1}, val2 ${num2}, restnum ${restnum}`;
}
console.log(calculateCartPrice(100, 200, 300, 700, 565, 8744));

//manageing objects with functions
const user = {
  name: "Priangshu",
  age: 21,
};

function handleObject(anyobject) {
  return `Name is ${anyobject.name}, age is ${anyobject.age}`;
}

// console.log(handleObject(user));
console.log(
  handleObject({
    name: "Soumya",
    age: 31,
  })
);

//manageing arrays with functions
const superHeros = ["iron-man", "captain america", "black panther"];

function handleArray(anyarray) {
  return `Favorite SuperHero ${anyarray[2]}`;
}

// console.log(handleArray(superHeros));
console.log(handleArray(["shaktiman", "vikram", "gabral"]));
