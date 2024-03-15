"use strict"; //treat all JS code as newer version

// alert("hello")
//we are using nodejs not browser for run the code

//*** Javascript is dynamic language because we don't define the data type it dyanamically defines itself

//1. primitive
/*
    String,Number,Boolean,null,undefined,Symbol,BigInt
*/

let name = "priangshu"; //string
let age = 21; //int
let isLoggedIn = false; //bollean
let response = null; //null - datatype + standalone value
let girlfriend; //undefined - if the value is not defined
const id = Symbol("123");
const anotherId = Symbol("123");
console.log(id === anotherId); //symbols - unique

//2. non-primitive/reference
/*
    Array,Object,Function
*/

const friends = ["soumya", "subho", "pijus"]; //array

const myInfo = {
  name: "Priangshu das", //objects
  age: 21,
};

const myFunction = function (name) {
  // function defined
  console.log(name);
};
myFunction("Priangshu function"); //function called

//object (most importent aka "Baaaaap")

console.table([typeof null, typeof age, typeof girlfriend]); //use "typeof" to log datatype

/* Memories - 1. Stack(Primitive) it returns a copy of the datatype
              2. Heap(Non-primitive) it returns a reference of the datatype
*/

let friend = "soumya";
let anotherFriend = friend;
anotherFriend = "subho";

console.log(friend);
console.log(anotherFriend);
//above is the example of stack memory

let friendDetails = {
  name: "pijus",
  age: 18,
};
let anotherFriendDetails = friendDetails;

anotherFriendDetails.age = 21;

console.log(friendDetails);
console.log(anotherFriendDetails);
//above is the example of heap memory
