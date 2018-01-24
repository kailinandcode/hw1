
function traverseDown8() {
  var step = 0;
  while (step < 8) {
    down();
  }
  right();
  right();
}
traverseDown8();
function traverse7Up() {
  var step = 0;
  while (step < 7) {
    up();
  }
  right();
  right();
}
traverse7Up();
function traverse7Down() {
  var step = 0;
  while (step < 7) {
    down();
  }
  right();
}
traverse7Down();
right();
traverse7Up();
traverse7Down();
