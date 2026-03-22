let btn = document.querySelector(".btn");
let inpfile = document.querySelector("#inpfile");

btn.addEventListener("click", () => {
  inpfile.click();

});

inpfile.addEventListener("change", (elem) => {
  
  let file = elem.target.files[0];

  if (file) {
    console.log(elem.target.files[0].name);
    btn.innerText = file.name;

  }

});