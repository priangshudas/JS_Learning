//For loop

for (let i = 0; i <= 10; i++) {
  const element = i;
  if (element == 5) {
    //if/else inside loop
    console.log("5 is best no.");
  }
  console.log(element);
}

for (let i = 0; i < 5; i++) {
  for (let j = 0; j < 5; j++) {
    //nested for loop
    console.log("*");
  }
  console.log("$");
}

const arr = ["Ableton", "Logic", "Cubase", "Protools", "FL"];
console.log(`Length of arr ${arr} is ${arr.length}`);

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

// breake and continue

for (let index = 1; index <= 20; index++) {
  if (index == 10) {
    console.log(`val ${index} is found`);
    //"break" will break the loop if condition matched or true
    break;
  }
  console.log(`Val of i is ${index}`);
}
for (let index = 1; index <= 20; index++) {
  if (index == 10) {
    console.log(`val ${index} is found`);
    //continue will continue the loop but the current context where condition matched or true the will not execute
    continue;
  }
  console.log(`Val of i is ${index}`);
}
