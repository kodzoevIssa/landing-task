export function direction() {
  const arrows = document.querySelectorAll(".direction__arrow");
  let activeLi = null;

  function resetToDesktopIfNeeded() {
    const screenWidth = window.innerWidth;

    if (screenWidth > 620) {
      document.querySelectorAll(".main__direction li").forEach((li) => {
        const img = li.querySelector("img");
        const wrap = li.querySelector(".direction__wrap");
        const arrow = li.querySelector(".direction__arrow");
        const extraText = wrap.querySelector(".direction__extra");

        if (extraText) extraText.remove();
        if (img) img.style.height = "";
        if (wrap) wrap.style.height = "";

        if (arrow) {
          arrow.style.display = "";
          arrow.style.visibility = "";
          arrow.style.opacity = "";
        }
      });

      activeLi = null;
    }
  }

  resetToDesktopIfNeeded();

  window.addEventListener("resize", resetToDesktopIfNeeded);

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
        if (extraText) extraText.remove();

        prevImg.style.height = "80px";
        prevWrap.style.height = "80px";
        prevArrow.style.display = "block";
        prevArrow.style.visibility = "";
        prevArrow.style.opacity = "";
      }

      const isActive = li === activeLi;

      if (isActive) {
        img.style.height = "80px";
        wrap.style.height = "80px";

        const extraText = wrap.querySelector(".direction__extra");
        if (extraText) extraText.remove();

        arrow.style.display = "block";
        arrow.style.visibility = "";
        arrow.style.opacity = "";

        activeLi = null;
      } else {
        img.style.height = "240px";
        wrap.style.height = "240px";

        const extraParagraph = document.createElement("p");
        extraParagraph.classList.add("direction__extra");
        extraParagraph.textContent =
          "Softline обладает всеми необходимыми государственными лицензиями для организации проектов по информационной безопасности и аттестации.";

        Object.assign(extraParagraph.style, {
          position: "absolute",
          top: "30%",
          left: "0",
          marginTop: "10px",
          fontSize: "22px",
          color: "#ffffff",
        });

        wrap.appendChild(extraParagraph);

        arrow.style.display = "none";
        arrow.style.visibility = "hidden";
        arrow.style.opacity = "0";

        activeLi = li;
      }
    });
  });
}
