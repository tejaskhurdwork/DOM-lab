let divTracker = document.querySelector(".tracker");
let tracker = (elem) => {
  console.log(elem.clientX, elem.clientY);

  divTracker.style.top = (elem.clientY-25) + "px" // have done minus 25 to keep mouse in center

  divTracker.style.left = (elem.clientX-25) + "px" // have done minus 25 to keep mouse in center

}

window.addEventListener("mousemove", tracker)