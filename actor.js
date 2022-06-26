let yActor = 335;
let xActor = 90;
let collision = false;
let myPoints = 0;

function showActor(){
  image(actorImage, xActor, yActor, 40, 40);
}

function moveActor(){
  if (keyIsDown(UP_ARROW)){
      yActor -= 3;
  }
  if (keyIsDown(DOWN_ARROW)){
    if (canMoveActor())
      yActor += 3;
  }
  if (keyIsDown(LEFT_ARROW)){
      xActor -= 3;
  }
  if (keyIsDown(RIGHT_ARROW)){
      xActor += 3;
  }
}

function collisionCheck(){
  for (let i = 0; i < carImages.length; i++){
    collision = collideRectCircle(xCars[i], yCars[i], lengthCar, heightCar, xActor, yActor, 20)
    if(collision){
      backActortoInitialPosicion();
      collisionSound.play();
      if (pointsGreaterThanZero()){
        myPoints -= 1;   
      }
    }
  }
}

function backActortoInitialPosicion(){
  yActor = 345;
}

function includePoints(){
  textAlign(CENTER);
  textSize(30);
  //textFont("fonts/PressStart2P-Regular.ttf")
  fill(color(255,140,0))
  text(myPoints, width / 5, 25);
}

function score(){
  if (yActor < 33){
    myPoints += 1;
    pointSound.play();
    backActortoInitialPosicion();
  }
}

function pointsGreaterThanZero(){
  return myPoints > 0
}

function canMoveActor(){
  return yActor < 335;
}


