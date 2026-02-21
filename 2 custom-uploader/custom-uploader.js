let btn = document.querySelector(".btn");
let inpfile = document.querySelector("#inpfile");

btn.addEventListener("click", () => {
  inpfile.click();
});

inpfile.addEventListener("change", (elem) => {
  console.log(elem.target.files[0].name);
  let file = elem.target.files[0];
  if(file) {
    btn.innerText = elem.target.files[0].name;
  }
  
});