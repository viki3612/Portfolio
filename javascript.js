function alterStyle() {
  let changeBackground = document.querySelector("#navbar-background-color");

  changeBackground.style.background = "white";
}

window.addEventListener("scroll", alterStyle);
