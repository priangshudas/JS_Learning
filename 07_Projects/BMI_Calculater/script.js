let form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const result = document.querySelector("#result");

  if (height === "" || height <= 0 || isNaN(height)) {
    result.innerHTML = "Please give a valid Height !";
    result.style.color = "red";
  } else if (weight === "" || weight <= 0 || isNaN(weight)) {
    result.innerHTML = "Please give a valid Weight !";
    result.style.color = "red";
  } else {
    const answer = (weight / ((height * height) / 10000)).toFixed(2);
    let weightGuide = "";
    if (answer < 18.6) {
      weightGuide = "Underweight";
    } else if (answer >= 18.6 || answer < 24.9) {
      weightGuide = "Normal weight";
    } else {
      weightGuide = "Overweight";
    }
    result.innerHTML = `<span>Your BMI is - ${answer}, <span/><span>You have ${weightGuide}<span/>`;
    result.style.color = "black";
  }
});
