function setup(){
  createCanvas(500, 400);
  sondtrack.loop();
}

function draw(){
  background(roadImage);
  showActor();
  showCar();
  moveCar();
  moveActor();
  backToInicialPosicionOfCar();
  collisionCheck();
  includePoints();
  score();
}
  




