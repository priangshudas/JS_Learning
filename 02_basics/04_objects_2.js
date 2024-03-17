const instaUser = new Object(); //constructor method (singelton)
const metaUser = {}; //object literals method

instaUser.id = "12jg56j7";
instaUser.name = "Dev";
instaUser.isLoggedIn = false;

// console.log(instaUser);

const regularUser = {
  //Nested objects
  email: "email@gmail.com",
  fullname: {
    userfullname: {
      firstname: "priangshu",
      middlename: "",
      lastname: "das",
    },
  },
};

// console.log(regularUser.fullname.userfullname.lastname); //Nested objects access

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "c", 4: "d" };
const obj3 = { 5: "e", 6: "f" };

const obj4 = { ...obj1, ...obj2, ...obj3 }; // merging two object using spread operator
console.log(obj4);

const obj5 = Object.assign({}, obj1, obj2, obj3); //merging two object without using spread operator
console.log(obj5);

//*** Array of object

const arrObj = [
  //Array of object
  {
    name: "priangshu",
    age: 21,
  },
  {
    name: "soumya",
    age: 23,
  },
  {
    name: "subho",
    age: 22,
  },
];

console.log(arrObj[1].name); // accessing the property of second element in array of object

//Imp objects methods

console.log(Object.keys(instaUser));
console.log(Object.values(instaUser));
console.log(Object.entries(instaUser));

console.log(instaUser.hasOwnProperty("email"));

const course = {
  coursename: "Javascript",
  price: 299,
  courseDuration: "2 months",
};

const { price } = course;
const { courseDuration: cd } = course;

console.log(price);
console.log(cd);

//.JSON Structure

//ex.1
// {
//   name: "hitesh",
//   coursename: "Javascript",
//   price: 399
// }

//ex.2
// [
//   {
//     name: "priangshu",
//     age: 20,
//   },
//   {
//     name: "soumya",
//     age: 21,
//   },
// ];
