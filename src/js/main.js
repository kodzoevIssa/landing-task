import { modal } from "./modal.js";
import { slider } from "./slider.js";
import { map } from "./map.js";
import { direction } from "./direction.js";
import { mapPresentationToggle } from "./mapPresentationToggle.js";

window.addEventListener("load", () => {
  modal();
  map();
  mapPresentationToggle();
  slider();
  direction();
});
