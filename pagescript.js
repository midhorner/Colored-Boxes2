const BUTTON = document.querySelector("#reset");
var numberOfSquares = 42;

for (i = 0; i < numberOfSquares; i++) {
  document.querySelector("#template").innerHTML += "<div class='box'></div>";
}

const BOXES = document.querySelectorAll(".box");
var boxes = Array.from(BOXES);

function randomize() {
  var box = boxes.indexOf(this);

  boxes[box].style.backgroundColor = randomColor();
  boxes[box].style.boxShadow = "2px 2px 5px 5px " + randomColor();
  boxes[box].style.borderTopRightRadius = randomNumber() + "px";
  boxes[box].style.borderTopLeftRadius = randomNumber() + "px";
  boxes[box].style.borderBottomRightRadius = randomNumber() + "px";
  boxes[box].style.borderBottomLeftRadius = randomNumber() + "px";
}

function randomColor() {
  var red = Math.floor(Math.random() * 255);
  var green = Math.floor(Math.random() * 255);
  var blue = Math.floor(Math.random() * 255);
  return "rgb(" + red + "," + green + "," + blue + ")";
}

function randomNumber() {
  return Math.floor(Math.random() * 250);
}

function resetSquares() {
  for (var i = 0; i < boxes.length; i++) {
    boxes[i].style.backgroundColor = "chartreuse";
    boxes[i].style.borderRadius = "";
    boxes[i].style.boxShadow = "";
  }
}

BOXES.forEach(box => box.addEventListener("mouseover", randomize));

BUTTON.addEventListener("click", resetSquares, false);
