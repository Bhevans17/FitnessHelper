(function() {
  "use strict";

  AOS.init();

  /* Open and close mobile side menu */
  let hamburgerIcon = document.getElementsByClassName("fa-bars");

  hamburgerIcon[0].addEventListener("click", function() {
    console.log(hamburgerIcon);
  });
})();
