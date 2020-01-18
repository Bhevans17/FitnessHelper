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

  /* Macro Calculator */
  let macroCalculatorForm = document.getElementById("macro-form");
  macroCalculatorForm.onsubmit = () => {
    let age = document.getElementById("age").value;
    let weight = document.getElementById("weight").value;

    alert(weight);
  };

  /* Macro Calculator Error Message */
  var newItem = document.createElement("span"); // Create a <li> node
  var textnode = document.createTextNode("* Please fill out all fields"); // Create a text node
  newItem.appendChild(textnode); // Append the text to <li>

  newItem.style.display = "block";
  newItem.style.paddingTop = "50px";
  newItem.style.color = "red";

  macroCalculatorForm.parentNode.insertBefore(newItem, macroCalculatorForm);

  console.log(macroCalculatorForm);
})();
