const numberContainer = document.querySelector(
  ".rating-state__number-container"
);
const rateNumber = document.querySelector(".thankyou-state__result--number");
const submitBtn = document.getElementById("submit");
const ratingState = document.querySelector(".rating-state");
const thankyouState = document.querySelector(".thankyou-state");
let numberSelected = null;
const numberButtons = document.querySelectorAll(
  ".rating-state__number-container__number"
);

numberContainer.addEventListener("click", (event) => {
  const buttonClicked = event.target;
  numberSelected = event.target.innerText;
  rateNumber.innerText = numberSelected;
  if (numberSelected > 0 || numberSelected <= 5) {
    submitBtn.addEventListener("click", () => {
      ratingState.style.display = "none";
      thankyouState.style.display = "flex";
    });
  }
  buttonSelected();
  buttonState();
});

console.log(numberButtons);

function buttonState() {
  if (!numberSelected) {
    submitBtn.disabled = true;
  } else {
    submitBtn.disabled = false;
  }
}
buttonState();

function buttonSelected() {
  numberButtons.forEach((button) => {
    if (button.innerText == numberSelected) {
      button.classList.add("selected");
    } else {
      button.classList.remove("selected");
    }
  });
}
