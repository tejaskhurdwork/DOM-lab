let inp = document.querySelector("input");
let span = document.querySelector("span");
let submitBtn = document.querySelector(".btn");
const maxChars = 20;

inp.addEventListener("input", function () {
  let left = maxChars - inp.value.length;
  span.textContent = left;

  if (left < 0) {
    span.style.color = "red";
  } else {
    span.style.color = "white";
  }
});

submitBtn.addEventListener("click", () => {
  if (inp.value.length > maxChars) {
    alert("Characters range is out of limit");
    return;
  } else {
    inp.value = "";
    span.textContent = maxChars;
  }

});