function setup() {
  createCanvas(600, 600);
}
let posX = Math.floor(Math.random() * 570);
let posY = Math.floor(Math.random() * 570);
let speedX = 5;
let speedY = 4;
function draw() {
  background(213, 182, 222);
  circle(posX, posY, 60);
  fill(252, 255, 204);
  noStroke();
  posX += speedX;
  posY += speedY;
  if (posX > 570) {
    speedX *= -1;
  } else if (posX < 30) {
    speedX *= -1;
  } else if(posY > 570){
    speedY *= -1;
  } else if (posY < 30){
      speedY *= -1;
  }
}
