"use strict";

const menuButton = document.querySelector("#nav_menu");

menuButton.addEventListener("click", () => {
  document.querySelector(".nav_list").classList.toggle("hidden");
});
