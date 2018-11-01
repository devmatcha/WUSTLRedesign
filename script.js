var spotlights = document.getElementsByClassName("spotlight");
var buttons = document.getElementsByClassName("transition");

var index = -1;

function hide() {
  for (var i = 0; i < spotlights.length; i++) {
    spotlights[i].style.display = "none";
    buttons[i].className = buttons[i].className.replace(" focus", "");
  }
}

spotlights[index].style.display = "block";
buttons[index].className += " focus";

function changeOnClick(change) {
  hide();
  index = change;
  spotlights[index].style.display = "block";
  buttons[index].className += " focus";
}

function changeIncrement(inc) {
  hide();
  index += inc;
  index = index % 4;
  spotlights[index].style.display = "block";
  buttons[index].className += " focus";
}

function slideshow() {
  changeIncrement(1);
  setTimeout(slideshow, 10000);
}
