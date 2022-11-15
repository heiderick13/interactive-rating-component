const radioBtns = document.querySelectorAll("input[name='ratings']");

const submitRating = document
  .querySelector("#btn")
  .addEventListener("click", () => {
    checkRadioBtns();
    let ratingValue = findSelected();
    updateScreen();
    printRating(ratingValue);
  });

function findSelected() {
  let selected = document.querySelector("input[name='ratings']:checked");
  return selected.value;
}

function checkRadioBtns() {
  radioBtns.forEach((radioBtn) => {
    radioBtn.addEventListener("change", findSelected);
  });
}

function updateScreen() {
  const ratingState = document.querySelector("#rating-state");
  const thankYouState = document.querySelector("#thank-you-state");

  ratingState.classList.add("hide");
  thankYouState.classList.remove("hide");
}

function printRating(ratingValue) {
  const selectedRating = document.querySelector("#selected-rating");
  selectedRating.textContent += ` ${ratingValue} out of 5`;
}
