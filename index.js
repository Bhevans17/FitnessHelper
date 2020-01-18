(function() {
  "use strict";

  AOS.init();

  /* Open and close mobile side menu */
  let hamburgerIcon = document.getElementsByClassName("fa-bars")[0];
  let crossIcon = document.getElementsByClassName("fa-times")[0];
  let sideMenu = document.getElementsByClassName("mobile-side-menu-hidden")[0];

  hamburgerIcon.addEventListener("click", function() {
    sideMenu.className = "mobile-side-menu";
  });

  crossIcon.addEventListener("click", function() {
    if ((sideMenu.className = "mobile-side-menu")) {
      sideMenu.className = "mobile-side-menu-hidden";
    }
  });

  /* Macro Calculator */

  let macroCalculator = document.getElementById("macro-form");

  macroCalculator.onclick = function(e) {
    e.preventDefault();
    let age = macroCalculator[0].value;
    let weight = macroCalculator[1].value;
    let gender = macroCalculator[2].value;
    let height = macroCalculator[3].value;
    let activity = macroCalculator[4].value;
    let bodyfat = macroCalculator[5].value;

    let proteins = (document.getElementById("protein-results").textContent =
      weight * 1.5);
    let fats = weight * 1.25;
  };
})();
