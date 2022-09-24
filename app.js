const bigDiv = document.querySelector(".big");
let result2 = document.querySelector(".scr");
let result1 = document.querySelector(".answer");

let num1 = "";
let num2 = "";

bigDiv.addEventListener("click", (e) => {
  if (e.target.classList.contains("equal")) {
    result1.innerText = eval(result1.innerText);
    history();
  } else if (e.target.classList.contains("ac")) {
    result1.innerHTML = "";
    result2.innerHTML = "";
  } else if (e.target.classList.contains("minus")) {
    if (result1.innerText.length > 0) {
      result1.innerText = eval(result1.innerText) * -1;
    }
  } else {
    result1.innerText += e.target.innerText;
  }
  islem = result1.innerText;
});

function history() {
  result2.innerText = islem;
}
