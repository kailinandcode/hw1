//puzzle 5
//to avoid obstacles
//when encountering a red square, Rudy should move up before continuing right
//when encountering a blue square, Rudy should move down before continuing right

function navigate() {
  while (remainingDots() != 0) {
    if (getColor() != "blue" | getColor() != "red") {
      right();
    }
    else if (getColor() == "blue") {
      down();
    }
    else {
      up();
    }
  }
}

navigate();
