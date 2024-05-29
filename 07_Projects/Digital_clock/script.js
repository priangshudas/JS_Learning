const clockBody = document.querySelector("#clock_body");

setInterval(() => {
  let date = new Date();
  clockBody.innerHTML = date.toLocaleTimeString("en-Us");
}, 1000);
