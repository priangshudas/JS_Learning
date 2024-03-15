const name = "priangshu";
const age = 21;

// console.log(name + age + " value"); // old techniqe to concatinate

console.log(`Hello my name is ${name} \nMy age is ${age}`);
//modern way to inject a dynamic value or variable via "${}"

const hero = new String("shaktiman"); //another way to declare string
//***Strings prototype methods most imp for interview
//some example below

console.log(
  `Aa gaya ${hero}` +
    `\nlenth of the string is ${hero.length}` + //length prototype method
    `\nUppercase wala ${hero.toUpperCase()}` + //upper case prototype method
    `\nCharacter at 5th index is ${hero.charAt(5)}` + //character prototype method
    `\nSubstring example ${hero.substring(0, 5)}` + //substring prototype method
    `\nSlice example ${hero.slice(-9, 5)}` //slice prototype method
);

const anotherHero = "      krish       ";
console.log(anotherHero);
console.log(anotherHero.trim()); //trim prototype method remove whitespaces from string

const url = "http://priangshu das@gmail.com";
console.log(url);
const fixedUrl = url.replace(" ", "-"); //replace prototype method remove desired content from first argument with second argument
console.log(fixedUrl);
console.log(`It has ${fixedUrl.charAt(20)} in it? ${fixedUrl.includes("@")}`); //includes prototyped method checks for desired arguments and give an boolean value as output
console.log(fixedUrl.split("/")); //split protype method split character by given argument
