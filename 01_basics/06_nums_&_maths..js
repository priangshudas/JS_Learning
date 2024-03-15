/*            Nums and methods(global objects)           */
const score = 5000.7685874458;
const anotherScore = new Number(50000000000);
console.log(`Score: ${score}`);
console.log(anotherScore);

console.log(`Fixed value is ${score.toFixed(2)}`); //toFixed prototype method in numbers

console.log(
  `Precise value is ${score.toPrecision(2)}`
); /*toPrecise prototype method in numbers give precise value as string formate*/

console.log(
  `Local value is ${anotherScore.toLocaleString("en-IN")}`
); /*toLocalString prototype method in numbers give local value of given number in string format*/

/*                 Maths Mthods(global objects)                 */

//importent maths methods below
console.log(Math.abs(-70)); //abs protype method take negetive number and return positive number
console.log(Math.round(56.78)); //round protype method take number and return roundof float number
console.log(Math.floor(56.78)); //floor protype method take number and return rounof number

console.log(Math.random()); //random protype method return random number between range of 0-1
console.log(Math.random() * 10 + 1); // use "*10+1" to genarate random number between 1 to 10

console.log(Math.floor(Math.random() * 10 + 1));

//***Genarate a random number between min to max value

const minNo = 10;
const maxNo = 20;

const randomNo = Math.floor(Math.random() * (maxNo - minNo + 1) + minNo);

console.log(`Random number between ${minNo} and ${maxNo} is ${randomNo}`);
