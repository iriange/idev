const main = document.querySelector(".main-content");
const styleSwitcherToggle = document.querySelector(".style-switcher-toggle");
styleSwitcherToggle.addEventListener("click", () => {
  document.querySelector(".style-switcher").classList.toggle("open");
});

window.addEventListener("scroll", () => {
  if (document.querySelector(".style-switcher").classList.contains("open")) {
    document.querySelector(".style-switcher").classList.remove("open");
  }
});

const alternateStyles = document.querySelectorAll(".alternate-style");

function setActiveStyle(couleur) {
  alternateStyles.forEach((style) => {
    if (couleur === style.getAttribute("title")) {
      style.removeAttribute("disabled");
    } else {
      style.setAttribute("disabled", "true");
    }
  });
}

const prefUser = window.matchMedia('(prefers-color-scheme: dark)').matches;

function swicthTime() {
  if (prefUser) {
    document.body.classList.add("dark");
  } else {
    document.body.classList.remove("dark");
  }
}
swicthTime();

const night = document.querySelector(".night");

night.addEventListener("click", () => {
  night.querySelector("i").classList.toggle("fa-sun");
  night.querySelector("i").classList.toggle("fa-moon");
  document.body.classList.toggle("dark");
});
window.addEventListener("load", () => {
  if (document.body.classList.contains("dark")) {
    night.querySelector("i").classList.add("fa-sun");
  } else {
    night.querySelector("i").classList.add("fa-moon");
  }
});

let rowAni = document.querySelector(".about .about-content .skills .row");


const observer = new IntersectionObserver(
  (ev) => {
    if (ev[0].isIntersecting) {
      let progressbar = document.querySelectorAll('.progress-in')
      let percents = document.querySelectorAll(".percent")
      progressbar.forEach((progress, index)=>{
        let currentProgress = parseInt(progress.getAttribute("data-progressStart"))
        let targetPercent = parseInt(progress.getAttribute("data-max"))


        let interval = setInterval(function() {
          if (currentProgress >= targetPercent) {
              clearInterval(interval);
          } else {
              currentProgress++;
              progress.style.width = currentProgress + "%";
              percents[index].innerHTML = currentProgress + "%";
          }
      }, 50)

      })
      observer.unobserve(rowAni);
      rowAni.classList.add("anime");
    }
  },
  {
    threshold: 1,
  }
);

observer.observe(rowAni);
