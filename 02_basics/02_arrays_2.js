const oldFriends = ["S. Dey", "Debnath", "Saikat"];
const newFriends = ["Subhadeep", "Soumyadeep", "Naren"];

// oldFriends.push(newFriends); // push an array to the new array
// console.log(oldFriends);

// const allFriends = oldFriends.concat(newFriends); // concat two arrays to make a new array
// console.log(allFriends);

const allFriends = [...oldFriends, ...newFriends]; //Spraed operator "..." merge multiple arrays to a single new array
console.log(allFriends);

const nestedArr = [
  2,
  4,
  6,
  7,
  [4, 6, 9, 3, 4],
  3,
  5,
  6,
  7,
  [3, 7, 4, 9, 2, [4, 7, 3, 6, 2]],
];

const unNestedArr = nestedArr.flat(3); // flatten a nested array
console.log(nestedArr);
console.log(unNestedArr);

console.log(Array.isArray(nestedArr)); // check if it is array
console.log(Array.isArray("Priangshu"));

console.log(Array.from("Priangshu")); // create a array from an element
console.log(Array.from({ name: "Priangshu" })); // to create array from object it gives a null array until we specify key or value

let score1 = 100;
let score2 = 500;
let score3 = 1000;
console.log(Array.of(score1, score2, score3)); // create a array of multiple elements
