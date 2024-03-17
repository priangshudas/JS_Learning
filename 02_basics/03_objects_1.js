//To create a object in js there is two way one is using the constructor and another is by just writing down the properties of that object which is called  as an Object literal.

//Construtor method(singleton)
//object.create

//Object literals

const sym = Symbol("key1"); //symbols are unique, read-only

const myObj = {
  //The way objects are created in JavaScript
  name: "Priangshu Das",
  age: 21,
  email: "priangshu@gmail.com",
  [sym]: "password", // The way we  can add dynamic keys to an object using square brackets like symbols
  location: "Jhargram",
  isLoggedIn: false,
  lastLoginDays: ["Monday", "Friday"], //we can add  properties of different data types as values in objects
};

console.log(myObj);
console.log(myObj.name); // Common way to access values from an object
console.log(myObj["age"]); // Another way to  access the value by passing the key inside the square
console.log(myObj[sym]);

myObj.email = "helloworld@gamil.com"; //Change the property value

// Object.freeze(myObj); //freeze method  makes an object immutable i.e it cannot be changed or deleted

myObj.email = "change@gmail.com"; //It will throw error because once frozen you cannot change its properties
console.log(myObj.email);

myObj.greeting = function () {
  //add a function to the object
  console.log(`Hello ${this.name}`);
};

console.log(myObj.greeting()); // Calling  that function
