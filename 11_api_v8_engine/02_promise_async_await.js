//Creating a new promise
const promiseOne = new Promise((resolve, reject) => {
  //Do an async task
  //DB calls,cryptography,network
  setTimeout(() => {
    console.log("async task 1 is complete");
    resolve(); //resolve function indicate if task is done or not
  }, 1000);
});

//Consume created promise
promiseOne.then(() => {
  console.log("async 1 resolved");
});

//creating another promise
new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("async task 2 is complete");
    resolve();
  }, 1000);
}).then(() => {
  console.log("async 2 resolved");
});

const promiseThree = new Promise((resolve, rejuct) => {
  setTimeout(() => {
    resolve({
      name: "priangshu",
      email: "example@gmail.com", //We can send value through resolve to then
    });
  }, 1000);
});

promiseThree.then((obj) => {
  //here we can reacive the value came from resolve
  console.log(`Name is - ${obj.name}, Email is - ${obj.email}`);
});

const promiseFour = new Promise((resolve, reject) => {
  setTimeout(() => {
    let err = true;
    if (!err) {
      resolve({
        username: "User1",
        password: "12345",
      });
    } else {
      reject("Error: Something Fucked!");
    }
  }, 1000);
});

promiseFour
  .then((obj) => {
    console.log(obj);
    return obj.username;
  })
  .then((username) => {
    //.then chaining seconf .then wont run until frevious .then runs completelly
    console.log(`Username is - ${username}`);
  })
  .catch((error) => {
    //error handaling using .catch()
    console.log(error);
  })
  .finally(() => {
    console.log("Finally block executed");
  });

const promiseFive = new Promise((resolve, reject) => {
  setTimeout(() => {
    let err = false;
    if (!err) {
      console.log("Await code running");
      resolve({
        name: "Priangshu Das",
      });
    } else {
      reject("Error: Something Fucked!");
    }
  }, 1000);
});

//using async await rather than .then() and .catch()
async function handlePromise() {
  //when we want ro use an function as asyncheonus behaibour then we use "async" before function
  try {
    //here we use try{} and catch() to handle the error
    const responce = await promiseFive; //we use await in every situation where the task takes time
    console.log(responce);
  } catch (error) {
    console.log(error);
  }
}

handlePromise();

//fetch() in js to get api responce

//first way to use fetch() is using async await
async function github() {
  try {
    const response = await fetch("https://api.github.com/");
    // console.log(response);
    const data = await response.json(); //here response,json() takes time thats why we use await
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}
github();

//first way to use fetch() is using .then().catch()
fetch("https://api.github.com/")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });
