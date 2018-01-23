//down, up, down up
//everytime you encounter red, go right twice then move vertically OPP direction

function skipEveryOther() {
  while (getColor != "red") {
    down();
  }
  right();
  right();
  while (getColor != "red") {
    up();
  }
  right();
  right();
  while (getColor != "red") {
    down();
  }
  right();
  right();
  while (getColor != "red") {
    up();
  }
  right();
  right();
  while (getColor != "red") {
    down();
  }
  right();
}
