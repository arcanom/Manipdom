let items = document.querySelectorAll(".carousel-item");
let suivant = document.getElementById("suivant");
let precedent = document.getElementById("precedent");
let track = document.getElementById("carousel-track");

let index = 0;

function updateCarousel() {
  track.style.transform = `translateX(-${index * 100}%)`;
}

suivant.addEventListener("click", () => {
  index = (index < items.length - 1) ? index + 1 : 0;
  updateCarousel();
});

precedent.addEventListener("click", () => {
  index = (index > 0) ? index - 1 : items.length - 1;
  updateCarousel();
});