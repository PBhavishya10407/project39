var car,carsGroup,carimage;
var bike,bikeimage;
var background,backgroundimage;

function preload()
{
   carimage = loadImage("carimage.jpg");
   bikeimage = loadImage("bikeimage.jpg");
   backgroundimage = loadImage("backgroundimage.jpg")
}

function setup()
{
  createCanvas(600,600);
  
  bike=createSprite(10,50,15,50);
  bike.addImage(bikeimage);
  bike.scale=0.1;

  carsGroup=new Group();
}

function draw()
{
  background(backgroundimage);
  

  if(frameCount%10===0)
  {
    carsGroup=createSprite(550,50,50,50);
    carsGroup.addImage(carimage);
    carsGroup.scale=0.3;
    carsGroup.x=Math.round(random(10,600));
    carsGroup.velocityY=10;
  }

  bike.x=World.mouseX;
  bike.y=World.mouseY;
  
  

  if(carsGroup.isTouching(bike))
  {
    background("red");
    textSize(40);
    text("GAME OVER",200,300);
    bike.x=0;
    bike.y=0;
    carsGrroup.velocityY=0;
  }

  drawSprites();
}