//for of loop
const arr = [1, 34, 5, 6, 8, "hello"];
for (const i of arr) {
  console.log(i);
}

// map

const countryCodes = new Map();
countryCodes.set("IN", "India");
countryCodes.set("BD", "Bangladesh");
countryCodes.set("USA", "United states of america");

console.log(countryCodes);

//forof loop for maps
for (const [key, values] of countryCodes) {
  console.log(`${values}'s country code is - ${key}`);
}

//object

const myObject = {
  js: "javascript",
  py: "python",
  cpp: "c++",
  rb: "ruby",
};

console.log(myObject);

//forin loop for objects also works in other places

for (const key in myObject) {
  console.log(`${myObject[key]}'s extention is - ${key} `);
}

//array

const myArr = ["intel", "amd", "snapdragon", "exynos", "mediatek"];

console.log(myArr);

//forin loop for arrays

for (const i in myArr) {
  console.log(myArr[i]);
}

//for each loop most importent for arrays

const countrys = ["india", "austrelia", "germany", "japan", "rusia"];

console.log(countrys);

countrys.push("bangladesh");

countrys.forEach((value, index, array) => {
  console.log(`In this array ${index}th index has our value is ${value}`);
  if (index == 5) {
    console.log(`At last our array is = [${array}]`);
  }
});

const print = (thing) => {
  console.log(thing);
};

countrys.forEach(print);

//foreach loops for objects inside arrays MOST IMP DATABASE DATA HANDLE

const pcGames = [
  {
    name: "gta 5",
    price: 1000,
  },
  {
    name: "pubg",
    price: 500,
  },
  {
    name: "fifa 22",
    price: 1000,
  },
];

pcGames.forEach((item) => {
  console.log(`Game name is - ${item.name}, and its price is - ${item.price}`);
});

pcGames.forEach((item, index) => {
  console.log(
    `Game name is - ${pcGames[index].name}, and its price is - ${pcGames[index].price}`
  );
});
