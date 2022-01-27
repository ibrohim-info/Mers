import tabs from "./modules/tabs";
import modal from "./modules/modal";
import data from "./modules/data";
import cards from "./modules/cards";
import loader from "./modules/loader";
import form from "./modules/form";
import sliders from "./modules/sliders";
import accardion from "./modules/accardion";
import { openModal } from "./modules/modal";
window.addEventListener("DOMContentLoaded", () => {
  const modalTimer = setTimeout(() => openModal("./modal", modalTimer), 5000);

  tabs();
  modal("[data-modal]", ".modal", modalTimer);
  data();
  cards();
  loader();
  form(modalTimer);
  sliders();
  accardion();
});
