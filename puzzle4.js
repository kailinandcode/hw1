//puzzle 4
function moveDown5() {
  var x = 0;
  while (x < 5) {
  down();
  x += 1;
  }
}
function collectGreenDots() {
  var dotsLeft = 2;
  while (dotsLeft != 0) {
    right();
    up();
    var FirstGate = getColor();
    down();
    setColor = FirstGate();
    //passes gate and collects green dot
    right();
    right();
    dotsLeft -= 1;
  }
}
moveDown5();
collectGreenDots();
