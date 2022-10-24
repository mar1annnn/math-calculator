// //a welcome message
// document.cookie = alert(
//   `Welcome to my first project :D. This is a simple calculator website made for fun!`
// );

//I know that my code is a bit messy but with time I'll master writing code

const number1 = document.querySelector(".number1");
const number2 = document.querySelector(".number2");
const mathOperations = document.querySelector(".math-operations");
const equal = document.querySelector(".equal");
const result = document.querySelector(".result-panel");
const darktheme = document.querySelector(".darktheme-btn");
const allClear = document.querySelector(".clear-all");

function allOperations() {
  if (mathOperations.value === "+") {
    let resultOfAddition =
      parseFloat(number1.value) + parseFloat(number2.value);
    return resultOfAddition;
  }
  if (mathOperations.value === "-") {
    let resultOfSubstraction =
      parseFloat(number1.value) - parseFloat(number2.value);
    return resultOfSubstraction;
  }

  if (mathOperations.value === ":") {
    let resultOfDivision =
      parseFloat(number1.value) / parseFloat(number2.value);
    return resultOfDivision;
  }
  if ((mathOperations.value = "x")) {
    let resultOfMultiplication =
      parseFloat(number1.value) * parseFloat(number2.value);
    return resultOfMultiplication;
  }
}

equal.addEventListener("click", function () {
  let funcOperations = allOperations();
  let resultPanelValue = (result.innerText = funcOperations);
  result.classList.add("result-panel-value");
  if (number1.value === ``) {
    result.innerText = ``;
  }
  if (number2.value === ``) {
    result.innerText = ``;
  }
});

darktheme.addEventListener("click", function () {
  let header = document.querySelector("header");
  let main = document.querySelector("main");
  let input = document.querySelectorAll("input,select");
  let footer = document.querySelector("footer");
  main.classList.contains("darkmain")
    ? main.classList.remove("darkmain")
    : main.classList.add("darkmain");
  header.classList.contains("darkheader")
    ? header.classList.remove("darkheader")
    : header.classList.add("darkheader");
  footer.classList.contains("darkfooter")
    ? footer.classList.remove("darkfooter")
    : footer.classList.add("darkfooter");
  result.classList.contains("dark-result-panel")
    ? result.classList.remove("dark-result-panel")
    : result.classList.add("dark-result-panel");
  input.forEach(function (item) {
    if (item.classList.contains("darkinputs")) {
      item.classList.remove("darkinputs");
    } else {
      item.classList.add("darkinputs");
    }
  });
});

allClear.addEventListener("click", function () {
  number1.value = ``;
  number2.value = ``;
  result.innerText = ``;
});
