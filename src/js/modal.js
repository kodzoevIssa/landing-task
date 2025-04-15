export function modal() {
  const arrowBtn = document.getElementById("arrow-map");
  const overlay = document.querySelector(".map__overlay");
  const windowEl = document.querySelector(".map__presentation--window");
  const arrowIcon = arrowBtn.querySelector(".arrow");

  arrowBtn.addEventListener("click", () => {
    const isActive = overlay.classList.contains("active");

    if (isActive) {
      overlay.classList.remove("active");
      windowEl.classList.remove("active");
      document.body.classList.remove("no-scroll");
      arrowIcon.classList.remove("rotated");
    } else {
      overlay.classList.add("active");
      windowEl.classList.add("active");
      document.body.classList.add("no-scroll");
      arrowIcon.classList.add("rotated");
    }
  });

  overlay.addEventListener("click", () => {
    overlay.classList.remove("active");
    windowEl.classList.remove("active");
    document.body.classList.remove("no-scroll");
    arrowIcon.classList.remove("rotated");
  });
}
