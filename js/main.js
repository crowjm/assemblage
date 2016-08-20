//grabs nav
var nav = document.getElementById('nav');
//grabs data-state of nav
var navState = nav.dataset.state;
//grabs the aria-expanded attribute from the nav
var ariaExpanded = nav.getAttribute('aria-expanded');
//grabs the menu link, which will be used to toggle nav
var menu = document.getElementById('menu');
//grabs all parts of the page with the slide class, that will move as nav is show/hidden
var slideContent = document.getElementsByClassName('slide');


menu.onclick = toggle;

function toggle() {
  //toggles data-state of the nav. open will show nav, closed will reveal
  if (navState === "open") {
    nav.dataset.state = "closed";
  } else {
    nav.dataset.state = "open";
  }
  navState = nav.dataset.state;

  //toggles aria-expanded attribute of the nav
  if (ariaExpanded === "true") {
    ariaExpanded = "false"
  } else {
    ariaExpanded = "true"
  }
  nav.setAttribute("aria-expanded", ariaExpanded);
  
  //slides main content to the left or right, depending on if nav is showing or hiding
  for (var i = 0; i < slideContent.length; i++) {
    if (slideContent[i].getAttribute('data-state') === "open") {
      slideContent[i].setAttribute('data-state', "closed");
    } else {
      slideContent[i].setAttribute('data-state', "open");
    }
  }
}