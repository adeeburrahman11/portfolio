var typed = new Typed(".auto-type", {
  strings: [
    "Hello there...",
    "...ٱلسَّلَامُ عَلَيْكُمْ",
    "नमस्ते...",
    "ਸਤਿ ਸ਼੍ਰੀ ਅਕਾਲ...",
  ],
  typeSpeed: 120,
  backSpeed: 120,
  loop: true,
});

var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");
function opentab(tabname) {
  for (tlink of tablinks) {
    tlink.classList.remove("active-link");
  }
  for (tcontent of tabcontents) {
    tcontent.classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");
}

var sidemenu = document.getElementById("sidemenu");

function openmenu() {
  sidemenu.style.right = "0";
}

function closemenu() {
  sidemenu.style.right = "-200px";
}

const scriptURL =
  "https://script.google.com/macros/s/AKfycbw1gXeNsy7-cuv8CI_acpo497UcTMJqbbSXHWY6UfgOWfaS5fKntcyylvi4gisdsIXuLQ/exec";
const form = document.forms["submit-to-google-sheet"];
const msg = document.getElementById("msg");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      msg.innerHTML = "Message sent successfully";
      setTimeout(function () {
        msg.innerHTML = "";
      }, 5000);
      form.reset();
    })
    .catch((error) => console.error("Error!", error.message));
});

let calcScrollValue = () => {
  let scrollProgress = document.getElementById("progress");
  let progressValue = document.getElementById("progress_value");
  let pos = document.documentElement.scrollTop;
  let calcHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  let scrollValue = Math.round((pos * 100) / calcHeight);
  if (pos > 100) {
    scrollProgress.style.display = "grid";
  } else {
    scrollProgress.style.display = "none";
  }
  scrollProgress.addEventListener("click", () => {
    document.documentElement.scrollTop = 0;
  });
  scrollProgress.style.background = `conic-gradient(#F4D800 ${scrollValue}%, transparent ${scrollValue}%)`;
};

window.onscroll = calcScrollValue;
window.onload = calcScrollValue;

let toggle_btn = document.querySelector("#checkbox");
let img = document.querySelector("#logo");
let toggle_img = document.querySelector("#toggle-img");

toggle_btn.addEventListener("change", () => {
  if (toggle_btn.checked) {
    document.body.classList.add("dark_mode");
    img.setAttribute("src", "images/logo1.WebP");
    toggle_img.setAttribute("src", "images/mode2.WebP");
  } else {
    document.body.classList.remove("dark_mode");
    img.setAttribute("src", "images/logo.WebP");
    toggle_img.setAttribute("src", "images/mode1.WebP");
  }
});
