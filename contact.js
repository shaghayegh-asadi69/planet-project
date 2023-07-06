const counterEl = document.querySelector(".counter");
const btn = document.getElementById("mybtn");

let barEl = document.querySelector(".loading-bar-front");
let containerEl = document.getElementById("containerEl");
let idx = 0;

updateNum();

function updateNum() {
  counterEl.innerText = idx + "%";
  barEl.style.width = idx + "%";
  idx++;
  if (idx < 101) {
    setTimeout(updateNum, 10);
  }
  setTimeout(function () {
     containerEl.classList.add("hide");
  }, 1000);
}
