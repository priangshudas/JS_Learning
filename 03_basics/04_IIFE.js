function DB1() {
  // Normal function declare
  console.log("Database 1 is connected");
}

DB1(); // function call

//IIFE= Immediately Invoked Function Expression
//Why use? = to avoid global scope pollution and to avoid variable name conflict

(function DB2() {
  //Immediately Invoked Function Expression
  console.log("Database 2 is connected");
})();

(() => {
  // When we use multiple IIFE then we have to use ";" at the end of function
  console.log("Database 3 is connected");
})();

((name) => {
  console.log(`Hello, ${name}`);
})("Priangshu");
