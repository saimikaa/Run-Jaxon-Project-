var boy,boy_running;
var path,pathing;

function preload(){
  //pre-load images
  boy_running = loadAnimation("runner-1.png", "runner-2.png");
  path = loadAnimation("path.png");
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  path = createSprite(200,200,400,10);
  path.addImage(pathing);
  path.velocityY = 4;
  path.scale = 1.2;

  boy = createSprite (50,160,20,50);
  boy.addImage("running", boy_running)
  edges = createEdgeSprites();

  rightboundary = CreateSprite(0,200,400,10);
  leftboundary = CreateSprtie(300,200,400,10);
  rightboundary.visible = false;
  leftboundary.visible = false;
  }


function draw() {
  background(0);

  if(path.y > 400){
  path.y = height/2;
  }
  boy.y = World.mouseY;
  boy.x = World.mouseX;

  boy.collide(rightboundary, leftboundary);

  drawSprites()
}