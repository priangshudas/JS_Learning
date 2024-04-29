// ---------------------------------Understanding this keyword----------------------------------------------------------------
const user = {
  // an object is a collection of key value pair
  userName: "Priangshu",
  price: 69,
  welcomeMassage: function () {
    // this is a function inside an object
    console.log(`${this.userName}, Welcome to website`); // this is a keyword which refers to the object current context
    console.log(this); // print the current context of the object
  },
};

user.welcomeMassage(); // calling the function inside the object

user.userName = "Soumya"; // change the value of the key
user.welcomeMassage(); // recalling the function

console.log(this); // print the current context of the object in this case it gives empty object(nodejs) but in browser it gives window object

function hello() {
  let userName = "Subho";
  console.log(this.userName); // this cannot be ussed inside a function
}

hello();

//----------------------------------------------Understanding arrow function----------------------------------------------------------

const world = () => {
  // this is the way we declare a function in arrow function
  let userName = "Pijush";
  console.log(this.userName);
  console.log("This is arrow func");
};

world();

// const addTwoNum = (num1, num2) => {
//   return num1 + num2;
// };

// const addTwoNum = (num1, num2) => num1 + num2; // this is the short form of the above function it is called implicit return
const addTwoNum = (num1, num2) => num1 + num2; // in implicit return we can remove the return and use only parenthesis

console.log(addTwoNum(70, 30));

// const priangshu = () => ({ userName: "Priangshu" });
const priangshu = () => ({
  //objects in functions using implicit return
  userName: "Priangshu",
  userSurname: "Das",
});
console.log(priangshu());
