let progress = document.querySelector(".progress");
let percent = document.querySelector(".percentage");
let downloadStatus = document.querySelector(".download-container h2");
let downloadBtn = document.querySelector(".download-btn");

let count = 0;
let secs = 5

downloadBtn.addEventListener("click", ()=>{
  downloadStatus.textContent = "Downloading File..."

  let int = setInterval(()=> {
    downloadBtn.disabled = true;
    if(count < 100 ){
      count++;
      console.log(count);
      progress.style.width = `${count}%`;
      percent.textContent = `${count}%`;
    }
    else {
      count = 0;
      secs = 10;
      downloadBtn.disabled = true;
      setTimeout(()=>{
        downloadStatus.textContent = "Downloaded"
      }, 500)
      clearInterval(int);
    }
  }, (secs * 1000)/ 100);
});