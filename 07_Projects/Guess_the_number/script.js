const form = document.querySelector("form");
let guessRemaining = 10;
let prevGuessed = 0;

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const inputVal = document.querySelector(".text").value;
  const result = document.querySelector("#result");
  const record = document.querySelector("#record");
  const guesses = document.querySelector("#guesses");

  let randomNo = Math.floor(Math.random() * 20) + 1;
  // console.log(randomNo);

  if (guessRemaining >= 1 || guessRemaining == 10) {
    if (inputVal == 0 || inputVal == "" || isNaN(inputVal)) {
      result.innerHTML = "Please enter a valid number";
      result.style.color = "red";
    } else if (inputVal == randomNo) {
      result.innerHTML = `Woohooo it is ${randomNo}, you guessed it right 🥳`;
      result.style.color = "green";

      prevGuessed++;
      record.innerHTML = `Previous guess record - ${prevGuessed}`;

      guessRemaining = 10;
      // console.log(prevGuessed);
    } else {
      result.innerHTML = `It is ${randomNo} 😔, Try again`;
      result.style.color = "red";

      guessRemaining--;
      guesses.innerHTML = `Guesses remaining - ${guessRemaining}`;
      // console.log(guessRemaining);
    }
  } else {
    alert(`Ahhhh you lost 😭, Your guess record is ${prevGuessed}`);
    location.reload();
    // console.log(guessRemaining);
  }
});
