export function direction() {
  const arrows = document.querySelectorAll(".direction__arrow");
  let activeLi = null;

  arrows.forEach((arrow) => {
    arrow.addEventListener("click", () => {
      const li = arrow.closest("li");
      const img = li.querySelector("img");
      const wrap = li.querySelector(".direction__wrap");

      if (activeLi && activeLi !== li) {
        const prevImg = activeLi.querySelector("img");
        const prevWrap = activeLi.querySelector(".direction__wrap");
        const prevArrow = activeLi.querySelector(".direction__arrow");

        const extraText = prevWrap.querySelector(".direction__extra");
        if (extraText) {
          extraText.remove();
        }

        prevImg.style.height = "80px";
        prevWrap.style.height = "80px";
        prevArrow.style.display = "block";
      }

      const isActive = li === activeLi;

      if (isActive) {
        img.style.height = "80px";
        wrap.style.height = "80px";

        const extraText = wrap.querySelector(".direction__extra");
        if (extraText) {
          extraText.remove();
        }

        arrow.style.display = "block";
        activeLi = null;
      } else {
        img.style.height = "240px";
        wrap.style.height = "240px";

        const extraParagraph = document.createElement("p");
        extraParagraph.classList.add("direction__extra");
        extraParagraph.textContent =
          "Softline обладает всеми необходимыми государственными лицензиями для организации проектов по информационной безопасности и аттестации.";

        extraParagraph.style.position = "absolute";
        extraParagraph.style.top = "30%";
        extraParagraph.style.left = "0";
        extraParagraph.style.marginTop = "10px";
        extraParagraph.style.fontSize = "22px";
        extraParagraph.style.color = "#ffffff";

        wrap.appendChild(extraParagraph);

        arrow.style.display = "none";
        activeLi = li;
      }
    });
  });
}
