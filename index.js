(function() {
  "use strict";

  AOS.init();

  /* Open and close mobile side menu */
  let hamburgerIcon = document.getElementsByClassName("fa-bars")[0];
  let crossIcon = document.getElementsByClassName("fa-times")[0];
  let sideMenu = document.getElementsByClassName("mobile-side-menu")[0];

  hamburgerIcon.addEventListener("click", function() {
    sideMenu.className = "mobile-side-menu-show";
  });
})();
