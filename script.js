const allBtns = document.querySelectorAll("input[name='rating']");
const submitted = document.querySelector(".card-submitted");
const number = document.querySelector(".card-submitted__rating-number");
let selected;

function submitRating() {
  for (let i = 0; i < allBtns.length; i++) {
    if (allBtns[i].checked) {
      number.innerText = allBtns[i].value;
      selected = allBtns[i];
    }
  }

  submitted.style.animation = "submitAnimation 2s";
  submitted.style.display = "block";
}

submitted.addEventListener("click", () => {
  selected.checked = false;
  submitted.style.animation = "submitFade 2s";
  setTimeout(() => {
    submitted.style.display = "none";
  }, 1500);
});
