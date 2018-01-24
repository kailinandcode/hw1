//draw the border of the rectangle to blue
//start clockwise: right, down, left, up

function moveRight(){
  var rightSteps = 0;
  while (rightSteps < 10) {
    setColor("blue");
    right();
    rightSteps = rightSteps + 1;
  }
}
moveRight();
function moveDown(){
  var downSteps = 0;
  while (downSteps < 9) {
    down();
    setColor("blue");
    downSteps = downSteps + 1;
  }
}
moveDown();
function moveLeft(){
  var leftSteps = 0;
  while (leftSteps < 9) {
    left();
    setColor("blue");
    leftSteps = leftSteps + 1;
  }
}
moveLeft();
function moveUp(){
  var upSteps = 0;
  while (upSteps < 8) {
    up();
    setColor("blue");
    upSteps = upSteps + 1;
  }
}
moveUp();
