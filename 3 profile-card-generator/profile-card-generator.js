let form = document.querySelector("form");
let inputs = document.querySelectorAll(".inp");
let container = document.querySelector(".card-container");

form.addEventListener("submit", function (elem) {
  elem.preventDefault();

  console.log(inputs[0].value);


  // let values = [];

  // inputs.forEach(function (elem) {
  //   values.push(elem.value);

  // });

  // let [imgUrl, name, age, email] = values;

  let card = document.createElement("div");
  card.classList.add("card");

  card.innerHTML = `
    <img src="${inputs[0].value}" alt="Profile Image">
    <h2>${inputs[1].value}</h2>
    <p><strong>Age:</strong> ${inputs[2].value}</p>
    <p><strong>Email:</strong> ${inputs[3].value}</p>
  `;

  container.appendChild(card);
});