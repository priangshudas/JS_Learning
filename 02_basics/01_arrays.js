const myArr = [7, 8, 1, 9, 3, 2, 5, true, "priangshu"]; // array declaration
const badHeros = new Array("Homelander", "Soilder boy", "A-train");

// console.log(myArr[0], badHeros[1], badHeros);

//Array methods

myArr.push(0); // push new element at the end
myArr.push("Homelander");
myArr.pop(); // remove the end element

console.log(myArr);

badHeros.unshift("Billy butcher", "Deep"); // push new element at the start
badHeros.shift(); // remove the starting element

console.log(badHeros);
console.log(badHeros.includes("hulk")); // find elements in array using "includes"

const newArr = badHeros.join();
console.log(newArr);
console.log(typeof newArr);

const Langs = ["JavaScript", "Java", "Python", "C++", "c#", "Rust", "Swift"];
console.log("Before any operations Main array - " + Langs);

const langsSlice = Langs.slice(1, 3); // Slice/remove the elements in the the range **but range is not include(in this ex. 3)  ** Does not change the main/referance array
console.log("After slice Main array - " + Langs);
console.log("After slice Output array - " + langsSlice);

const langsSplice = Langs.splice(1, 3, "Php"); // remove elements in the Range **but range(in this ex. 3) is included and add new elements into it ** Does change the main/referance array
console.log("After splice Main array - " + Langs);
console.log("After slice Output array - " + langsSplice);
