export function slider() {
  const sliderTrack = document.getElementById("slider");
  const slides = document.querySelectorAll(".slide");
  const btnLeft = document.getElementById("arrow-slider1");
  const btnRight = document.getElementById("arrow-slider2");
  const lines = document.querySelectorAll(".footer__line");

  let currentIndex = 0;
  let slideWidth = slides[0].offsetWidth;

  if (!sliderTrack || slides.length === 0 || !btnLeft || !btnRight) return;

  function updateSlider() {
    const offset = -currentIndex * slideWidth;
    sliderTrack.style.transform = `translateX(${offset}px)`;

    lines.forEach((line, index) => {
      line.classList.toggle("active", index === currentIndex);
    });
  }

  function resizeSlider() {
    slideWidth = slides[0].offsetWidth;
    updateSlider();
  }

  btnLeft.addEventListener("click", () => {
    if (currentIndex > 0) {
      currentIndex--;
      updateSlider();
    }
  });

  btnRight.addEventListener("click", () => {
    if (currentIndex < slides.length - 1) {
      currentIndex++;
      updateSlider();
    }
  });

  lines.forEach((line, index) => {
    line.addEventListener("click", () => {
      currentIndex = index;
      updateSlider();
    });
  });

  window.addEventListener("resize", resizeSlider);

  updateSlider();
}
