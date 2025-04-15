export function mapPresentationToggle() {
  const regionButtons = document.querySelectorAll(".map__presentation--reg");

  regionButtons.forEach((region) => {
    region.addEventListener("click", function () {
      const regionList = this.closest("ul");

      const cities = regionList.querySelectorAll(".map__presentation--city");

      const areCitiesVisible = Array.from(cities).every(
        (city) => city.style.display !== "none"
      );

      cities.forEach((city) => {
        city.style.display = areCitiesVisible ? "none" : "block";
      });

      const arrowIcon = this.querySelector("img");
      arrowIcon.classList.toggle("rotated", !areCitiesVisible);
    });
  });
}

document.addEventListener("DOMContentLoaded", mapPresentationToggle);
