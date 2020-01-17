var p1, p2, p3, p4, p5, p6;
var bg, bgImg;
var sun, sunImg;


function preload(){
  bgImg = loadImage("bg4.jpg");
  p1Img = loadImage("earth.png");
  p2Img = loadImage("mercury.png");
  p3Img = loadImage("jupiter.png");
  p4Img = loadImage("neptune.png");
  p5Img = loadImage("saturn.png");
  p6Img = loadImage("uranus.png");
 

  sunImg = loadImage("sun.png");
}
function setup() {
 var canvas = createCanvas (1200,600);

    bg = createSprite(1200,800,10,10);
    bg.addImage(bgImg);
    bg.scale = 3.5;   

    sun = createSprite(1000, 300);
    sun.addImage(sunImg);
    sun.scale = 0.4 ;


    p1 = createSprite(750,300,10,10);
    p1.addImage(p1Img);
    p1.scale = 0.07;

    p2 = createSprite(600,200,10,10);
    p2.addImage(p2Img);
    p2.scale = 0.2;

    p3 = createSprite(450,400,10,10);
    p3.addImage( p3Img);
    p3.scale = 0.3;

    p4 = createSprite(380,250,10,10);
    p4.addImage(p4Img);
    p4.scale = 0.12;

    p5 = createSprite(200,280,10,10);
    p5.addImage(p5Img);
    p5.scale = 0.3;

    p6 = createSprite(100,200,10,10);
    p6.addImage(p6Img);
    p6.scale = 0.4;
    

    
 
 }
 


function draw() {
  background("blue");
 
  if(keyDown("UP_ARROW")) {
    sun.velocityX = 0;
    sun.velocityY = -2;
    

  }
  if(keyDown ("DOWN_ARROW")){
    sun.velocityX =0;
    sun.velocityY =2;
  
  }
  if(keyDown("RIGHT_ARROW")){
    sun.velocityX =2;
    sun.velocityY =0;
  }
  if (keyDown("LEFT_ARROW")){
    sun.velocityX =-2;
    sun.velocityY =0;
  }
  
  if (sun.isTouching(p1)){
    p1.destroy();
  }
  if (sun.isTouching(p2)){
    p2.destroy();

  }
if (sun.isTouching(p3)){
  p3.destroy();
}
if (sun.isTouching(p4)){
  p4.destroy();
}
if (sun.isTouching(p5)){
  p5.destroy();
}
if (sun.isTouching(p6)){
  p6.destroy();
}


  drawSprites();
  
}