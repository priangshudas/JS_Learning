const randomColour = () => {
  const hex = "0123456789ABCDEF";
  let colour = "#";
  for (i = 0; i < 6; i++) {
    colour += hex[Math.floor(Math.random() * 16)];
  }
  return colour;
};

let interval;

document.querySelector("#start").addEventListener("click", () => {
  if (!interval) {
    interval = setInterval(() => {
      document.body.style.backgroundColor = randomColour();
    }, 2000);
  }
});

document.querySelector("#stop").addEventListener("click", () => {
  clearInterval(interval);
});
