const irArriba = document.getElementById("ir-arriba");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    irArriba.classList.add("show");
  } else {
    irArriba.classList.remove("show");
  }
});

irArriba.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});
