// falsy values
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values
// "0", 'false', " ", [], {}, function(){}

const userEmail = "daspriangshu99@gmail.com";

if (userEmail) {
  console.log("Got user email");
} else {
  console.log("Don't have user email");
}

const userName = [];

if (userName) {
  console.log("Got user email");
} else {
  console.log("Don't have user email");
}

if (userName.length === 0) {
  console.log("Array is empty");
}

const emptyObj = {};

if (Object.keys(emptyObj).length === 0) {
  console.log("Object is empty");
}

// Nullish Coalescing Operator (??): null undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 20;
