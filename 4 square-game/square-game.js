// For S1

let s1 = document.querySelector("#sq1")
s1.addEventListener("mouseover",function(){
  s1.querySelector("h1").textContent = Math.floor(Math.random()*100)
})

// note:  mouseover is use, if i enter a div text-content of h1 will get change but if i enter h1 then also text-content of h1 will change

s1.addEventListener("mouseleave",function(){
  s1.querySelector("h1").textContent = 1
})


// For S2
let s2 = document.querySelector("#sq2")
let clr = "red"
s2.addEventListener("mouseenter",function(){
  if(clr === "red"){
    s2.style.backgroundColor = clr
    clr = "blue"
  }
  else if(clr === "blue") {
    s2.style.backgroundColor = clr
    clr = "green"
  }
  else {
    s2.style.backgroundColor = clr
    clr = "red"
  }
  
})

s2.addEventListener("mouseleave",function(){
  s2.style.backgroundColor = "white"
})


// For S3
let s3 = document.querySelector("#sq3");
s3.addEventListener("mouseenter", function () {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  s3.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
});

s3.addEventListener("mouseleave",function(){
  s3.style.backgroundColor = "white"
})




// For S4

let s4 = document.querySelector("#sq4");
s4.addEventListener("click", function () {
  let r1 = Math.floor(Math.random() * 256);
  let r2 = Math.floor(Math.random() * 256);
  let r3 = Math.floor(Math.random() * 256);
  s1.style.backgroundColor = `rgb(${r1}, 255,255)`;
  s2.style.backgroundColor = `rgb(255, ${r2}, 255)`;
  s3.style.backgroundColor = `rgb(255, 255, ${r3})`;
});

s4.addEventListener("mouseleave",function(){
  s1.style.backgroundColor = "white"
  s2.style.backgroundColor = "white"
  s3.style.backgroundColor = "white"
})


// mouseenter -> no event bubbling
// mouseover is like mouseenter but it has event bubbling means event triggers on child
// A quick mnemonic: think “enter = only here”, while “over = anywhere inside”.



// mouseleave -> no event bubbling
// mouseout is like mouseleave but it has event bubbling means event triggers on child
// A quick mnemonic: think “leave = leave from here”, while “out = out from everywhere”.