// window means screen so event listener screen pe lagaya ahi

window.addEventListener("keydown", (elem) => {
  console.log(elem);
  if (elem.key == " ") document.querySelector("h1").innerText = `Space`;
  else document.querySelector("h1").innerText = `${elem.key}`;
});

// keydown → Fires when key is pressed down
// keyup → Fires when key is released
// keypress → Older event (mostly deprecated)