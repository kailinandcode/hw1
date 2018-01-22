//puzzle 3;
//Rudy moves down 2 to reach the color which corresponds to the color inside the gate.

function keepMovingDown(moves) {
  var x = 0;
  while (x < moves) {
  down();
  x += 1;
  }
}
keepMovingDown(2);
var currColor = getColor()
keepMovingDown(3);
right();
right();
//set the color outside the gate to the same color as the square inside it
setColor(currColor);
right();
right();
up();
//collects puzzle
