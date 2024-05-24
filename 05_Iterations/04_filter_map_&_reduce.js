// const coding = ["js", "ruby", "go", "php", "c#"];

// console.log(coding);

// const value = coding.forEach((item) => {
//   return item;
// });

// console.log(value);

//--------------------------------------filter & map-------------------------------------------------

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const hello = myNums.filter((nums) => {
  if (nums >= 4) {
    return nums;
  }
});

console.log(hello);

const books = [
  { title: "Book One", genre: "Fiction", publish: 1981, edition: 2004 },
  { title: "Book Two", genre: "Non-Fiction", publish: 1992, edition: 2008 },
  { title: "Book Three", genre: "History", publish: 1999, edition: 2007 },
  { title: "Book Four", genre: "Non-Fiction", publish: 1989, edition: 2010 },
  { title: "Book Five", genre: "Science", publish: 2009, edition: 2014 },
  { title: "Book Six", genre: "Fiction", publish: 1987, edition: 2010 },
  { title: "Book Seven", genre: "History", publish: 1986, edition: 1996 },
  { title: "Book Eight", genre: "Science", publish: 2011, edition: 2016 },
  { title: "Book Nine", genre: "Non-Fiction", publish: 1981, edition: 1989 },
];

const neededBooks = books.filter((item) => item.genre == "Science");

console.log(neededBooks);

const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const newNums = myNumers.map( (num) => { return num + 10})

const newNums = myNumers
  .map((num) => num * 10)
  .map((num) => num + 1)
  .filter((num) => num >= 40);

console.log(newNums);

//--------------------------------------reduce-------------------------------------------------

const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const newNumbers = myNumbers.reduce((accumulater, currentValue) => {
  console.log(
    `Accumulater is ${accumulater} and Current value is ${currentValue}`
  );
  return accumulater + currentValue;
}, 0);

console.log(`New number after reduce operation is ${newNumbers}`);

const shoppingCart = [
  {
    itemName: "js course",
    price: 2999,
  },
  {
    itemName: "py course",
    price: 999,
  },
  {
    itemName: "mobile dev course",
    price: 5999,
  },
  {
    itemName: "data science course",
    price: 12999,
  },
];
const priceToPay = shoppingCart.reduce((acc, crv) => acc + crv.price, 0);

console.log(` Your total price is ${priceToPay}`);
