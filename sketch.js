var ball,ballImage,blueballImage,redballImage,greenballImage,pinkballImage;
var bloke1, bloke2, bloke3,bloke4;
var music;

function preload(){
   music = loadSound("music.mp3");
   ballImage = loadImage("ballImage.png");
   blueballImage = loadImage("blue.png");
   redballImage = loadImage("red.png");
   greenballImage = loadImage("green.png");
   pinkballImage = loadImage("pink.png");
 }

function setup(){
   canvas=createCanvas(400,400);
   music.play();

 //create 4 different surfaces
   bloke1=createSprite(50,390,95,15);
   bloke1.shapeColor="blue";

   bloke2=createSprite(150,390,95,15);
   bloke2.shapeColor="red";

   bloke3=createSprite(250,390,95,15);
   bloke3.shapeColor="green";

   bloke4=createSprite(350,390,95,15);
   bloke4.shapeColor="pink";


 //create box sprite and give velocity
   ball=createSprite(random(20,380),50,20,20);
   ball.addImage(ballImage);
   ball.scale = 0.1;
   ball.velocityX=-2.5;
   ball.velocityY=3;
 }

function draw() {
   background("grey");

 //create edgeSprite
   edges=createEdgeSprites();
   ball.bounceOff(edges);

 //add condition to check if box touching surface and make it box
   if(bloke1.isTouching(ball) && ball.bounceOff(bloke1)){
      ball.addImage(blueballImage);
      ball.changeImage(blueballImage);
 }

   if(bloke2.isTouching(ball) && ball.bounceOff(bloke2)){
    ball.addImage(redballImage);
    ball.changeImage(redballImage);
 }

   if(bloke3.isTouching(ball) && ball.bounceOff(bloke3)){
    ball.addImage(greenballImage);
    ball.changeImage(greenballImage);
 }

   if(bloke4.isTouching(ball) && ball.bounceOff(bloke4)){
    ball.addImage(pinkballImage);
    ball.changeImage(pinkballImage);
 }
   
    drawSprites();
 }
