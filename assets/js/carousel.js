let currentIndex = 0;
const images = document.querySelectorAll(".carousel picture");
const totalImages = images.length;

function showSlide(index) {
  const carousel = document.querySelector(".carousel");
  const imageWidth = document.querySelector(".carousel-container").offsetWidth;
  carousel.style.transform = `translateX(${-index * imageWidth}px)`;
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % totalImages;
  showSlide(currentIndex);
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + totalImages) % totalImages;
  showSlide(currentIndex);
}

function autoSlide() {
  nextSlide();
  setTimeout(autoSlide, 3000);
}

// Adjust slides on window resize
window.addEventListener("resize", () => showSlide(currentIndex));

// Start the automatic slideshow
setTimeout(autoSlide, 3000);
