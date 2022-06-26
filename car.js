let yCars = [60,100,150,210,260];
let velCars = [3.5, 5, 4.5, 4, 3.7];
let xCars = [600, 600, 600, 600, 600];
let lengthCar = 65;
let heightCar = 55;

function showCar(){
  for(let i = 0; i < carImages.length; i++){
    image(carImages[i], xCars[i], yCars[i], lengthCar, heightCar);
  }
}
function moveCar(){
  for(let i = 0; i < carImages.length; i++){
    xCars[i] -= velCars[i];
  }
}

function backToInicialPosicionOfCar(){
  for(let i = 0; i < carImages.length; i++){
    if (passedAllScreen(xCars[i])){
      xCars[i] = 600;
    }
  }
}

function passedAllScreen(xCars){
  return xCars < -50;
}