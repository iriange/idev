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
const nightHours = new Date().setHours(18, 0);
const currentHours = new Date().getTime();
function swicthTime() {
  let fun = document.createElement("div");
  fun.setAttribute("class", "isNight");
  fun.innerText = "Il est 18h ;)";
  if (nightHours <= currentHours) {
    document.body.classList.add("dark");
    main.appendChild(fun);
  } else {
    document.body.classList.remove("dark");
    fun.classList.remove("isNight");
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
function countUp(min=0, max) {
  for ( min; min <= max; min++) {
    // p.innerHTML = min
  setInterval(()=>{
      document.querySelector(".percent").innerHTML = min + '%'
      // console.log(p.innerHTML,min)
    },1000)
  }
}

const observer = new IntersectionObserver(
  (ev) => {
    if (ev[0].isIntersecting) {
      let percents = document.querySelectorAll('.percent')
      let pros_in = document.querySelectorAll('.progress-in')
      let i = 5
      let m = 0
      console.log(percents[m])
      while (m<i) {
        let pro = pros_in[m].style.width
        pro = Number(pro.replace('%', ''))
        console.log(pro)
        let n = 0
        let b = 0
          const t = setInterval(()=>{
            percents.innerHTML = `${n++}%`
            if (n >= pro || b>=i) {
              clearInterval(t)
            }
            console.log(n++)
          }, 40)
        // if (percents[m] == pros_in[m]) {
        //   console.log(percents[m])
        //   // countUp(0,max)
        // }
        m++ 
      }
      observer.unobserve(rowAni);
      rowAni.classList.add("anime");
    }
  },
  {
    threshold: 1,
  }
);

observer.observe(rowAni);
