export function map() {
  const links = document.querySelectorAll(".map__link");
  const mapImg = document.querySelector(".map__img img");

  if (!mapImg || links.length === 0) return;

  links.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();

      const id = link.id;
      const number = id.split("-")[1];

      mapImg.src = `./images/MAP-${number}.png`;

      links.forEach((el) => el.classList.remove("active"));

      link.classList.add("active");
    });
  });
}
