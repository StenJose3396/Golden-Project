var canvas, backgroundImage;
var welcomeSprite, welImg, enter, enterImg, startImg;
var thief,thiefImg, scene1Img, scene2Img;
var backgroundImg;
var scene = 1;
var gameState = 0;




function preload(){
  thiefImg = loadImage("images/Thief1.png");
  startImg = loadImage("images/Start button.png");
  scene1Img = loadImage("images/bank1.png");
  enterImg = loadImage("images/EnterButton.png");
  scene2Img = loadImage("images/Scene2.jpg")
}

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  welcomeSprite = createSprite(width/2, height/2, width, height)
  welcomeSprite.shapeColor = "darkblue";
  enter = createSprite(width/2 , height/2 + 200, 80, 30 )
  
  enter.addImage(enterImg);
  enter.addImage(startImg);
  enter.scale = 0.2;
  thief = createSprite(width/2,height/2,40,100);
  thief.addImage(thiefImg);
  thief.scale = 0.5;
  
}


function draw(){
  if(backgroundImg){
    background(backgroundImg)
  }
  else{
    background(0);
  }
 if(gameState === 0){
  drawSprites();
   textSize(80);
   fill("white");
   strokeWeight(2);
   stroke("green");
   text("Super Thief", width/2 - 50, 50);


   if(mousePressedOver(enter)){
     gameState = 1;
     welcomeSprite.visible = false;
     backgroundImg = scene1Img;
     enter.addImage(enterImg);
     enter.y = height-320;
     thief.y = height-120;
   }
 }
 if(gameState === 1){
   drawSprites();
   if(mousePressedOver(enter)){
     scene = 2;
     backgroundImg = scene2Img;
     enter.visible = false;
   }
 }
 if(keyDown("left")&& thief.x>10){
   thief.x -=10;
 }
 if(keyDown("right")&& thief.x<width-10){
  thief.x +=10;
 }
}
