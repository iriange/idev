let minus = document.querySelector(".minus");
let plus = document.querySelector(".plus");
let counter = document.querySelector(".counter");
let gallery = document.querySelector(".gallery");
let navElementsActive = document.querySelectorAll(".aside .nav li a");

navElementsActive.forEach((navElementActive) => {
  navElementActive.addEventListener("click", () => {
    for (let i = 0; i < navElementsActive.length; i++) {
      navElementsActive[i].classList.remove("active");
    }
    navElementActive.classList.add("active");
  });
});

// const birthyears = new Date('1997-8-1').getFullYear();
// const currentDate = new Date().getFullYear();

// const age = currentDate - birthyears;

// const myage = document.querySelector('.info-item .age');
// myage.innerHTML = `${age} ans`;

plus.addEventListener("click", function () {
  counter.innerHTML++;
  sessionStorage.setItem("nbGallerie", `${counter.innerHTML}`);
});
minus.addEventListener("click", function (e) {
  if (counter.innerHTML <= 2) {
    e.preventDefault();
    return;
  } else {
    counter.innerHTML--;
    sessionStorage.setItem("nbGallerie", `${counter.innerHTML}`);
  }
});

function randomNumb(nb) {
  let i = 0;
  while (i < nb) {
    let li = document.createElement("li");
    li.setAttribute("class", "gallery-item");
    li.innerHTML = '<img id="gallery-img" >';
    gallery.appendChild(li);
    i++;
  }
  random();
}

counter.innerHTML =
  sessionStorage.getItem("nbGallerie") === null
    ? document.querySelector(".counter").innerHTML
    : sessionStorage.getItem("nbGallerie");

function random() {
  let imgs = document.querySelectorAll("#gallery-img");
  imgs.forEach((img) => {
    const WIDTH = Math.floor(Math.random() * 100 + 200);
    const HEIGTH = Math.floor(Math.random() * 100 + 300);
    const SIG = Math.floor(Math.random() * 10 + 1);
    img.src =
      "https://source.unsplash.com/random/" +
      WIDTH +
      "x" +
      HEIGTH +
      "?sig=" +
      SIG +
      "";
  });
}
window.addEventListener("load", () => {
  if (!window.navigator.onLine) {
    gallery.innerHTML = "<li>Vous n'est pas connecté à internet (T_T)</li>";
  } else {
    randomNumb(counter.innerHTML);
  }
});
