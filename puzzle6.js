//puzzle 6
// if the first thing you encountered was red, move up 3 more
// otherise, move down 3 more
// if the second colored square is a blue, move right-up
// if the second colored square is a red, move left-up

function navP6() {
  right();
  if (getColor() == "red") {
    up();
    up();
    up();
    if (getColor() == "red") {
      left();
      up();
    }
    else {
      right();
      up();
    }
  }
  else {
    down();
    down();
    down();
    left();
    down();
  }
}
navP6();
