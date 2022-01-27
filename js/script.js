window.addEventListener("DOMContentLoaded", () => {
  const tabs = require("./modules/tabs"),
    modal = require("./modules/modal"),
    data = require("./modules/data"),
    cards = require("./modules/cards"),
    loader = require("./modules/loader"),
    form = require("./modules/form"),
    sliders = require("./modules/sliders"),
    accardion = require("./modules/accardion");

  tabs();
  modal();
  data();
  cards();
  loader();
  form();
  sliders();
  accardion();
});
