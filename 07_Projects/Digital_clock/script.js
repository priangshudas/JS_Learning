const clockBody = document.querySelector("#clock_body");

setInterval(() => {
  let date = new Date();
  clockBody.innerHTML = date.toLocaleTimeString();
}, 1000);
