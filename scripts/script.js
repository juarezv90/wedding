function countDown() {
  const cntDown = document.getElementById("weddingCntDown");

  const proposedDate = new Date("2024.04.19");
  const today = new Date();

  const diff = Math.trunc(Math.abs(proposedDate - today) / 1000 / 60 / 60 / 24);

  cntDown.innerHTML = `${diff} days left!`;
}

const burgerMenu = document.getElementById("burger-menu");

let active = false;

burgerMenu.addEventListener("click", function display() {
  const mobileMenu = document.getElementById("mobile-menu");

  if (active) {
    mobileMenu.style.opacity = 0;
    mobileMenu.style.right = "-10rem";
    active = !active;
    this.src = "./images/icons/burger.svg";
  } else {
    mobileMenu.style.opacity = 1;
    mobileMenu.style.right = 0;
    active = !active;
    this.src = "./images/icons/close.svg";
  }
});

countDown();