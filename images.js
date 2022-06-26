let roadImage;
let actorImage;
let carImage1;
let carImage2;
let carImage3;
let carImage4;
let carImage5;

let sondtrack;
let collisionSound;
let pointSound;

function preload(){
  roadImage = loadImage("images/estrada.png");
  actorImage = loadImage("images/ator-1.png");
  carImage1 = loadImage("images/carro-1.png");
  carImage2 = loadImage("images/carro-2.png");
  carImage3 = loadImage("images/carro-3.png");
  carImage4 = loadImage("images/carro-4.png");
  carImage5 = loadImage("images/carro-5.png");
  carImages = [carImage1, carImage2, carImage3, carImage4, carImage5];
  
  sondtrack = loadSound("songs/trilha1.mp3");
  collisionSound = loadSound("songs/colidiu.mp3");
  pointSound = loadSound("songs/pontos.wav");
}