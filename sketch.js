var astronaut, astronautImg
var aliens, aliensImg
var fondo, fondoImg
var laser, laser1, laser2, laser3
var gameOver, gameOverImg
var damaged, damagedImg
var top

function preload(){
  fondoImg = loadImage("assets/fondo.png")
  astronautImg = loadImage("assets/astronaut.png")
  aliensImg = loadImage("assets/aliens.png")

  laser1 = loadImage("assets/laser_1.png")
  laser2 = loadImage("assets/laser_2.png")
  laser3 = loadImage("assets/laser_3.png")
  damagedImg = loadAnimation("assets/astronaut.png","assets/damaged.png")
 
  gameOverImg = loadImage("assets/gameOver.png")
}


function setup() {
  createCanvas(600,400);
  fondo = createSprite(300,200,1,1);
  fondo.addImage(fondoImg);
  fondo.scale = 0.2;
  
  astronaut = createSprite(60,150,1,1);
  astronaut.addImage(astronautImg);
  astronaut.scale = 0.15;
  astronaut.depth=  2         
  
  aliens = createSprite(550,350);
  aliens.addImage(aliensImg);
  aliens.scale = 0.2;

  aliens = createSprite(550,250);
  aliens.addImage(aliensImg);
  aliens.scale = 0.2;

  aliens = createSprite(550,150);
  aliens.addImage(aliensImg)
  aliens.scale = 0.2

  aliens = createSprite(550,50);
  aliens.addImage(aliensImg);
  aliens.scale = 0.2;

  gameOver = createSprite(300,200);
  gameOver.addImage(gameOverImg);
  gameOver.scale = 0.5;
  gameOver.visible = false;

  laserGroup=new Group();
} 


function draw() {
  background(255,255,255);  
  
  if(keyDown("space")){
     astronaut.velocityY = -6
    }
    
    astronaut.velocityY = astronaut.velocityY +1

    if(astronaut.position.y > 440){
      gameOver.visible = true;
      astronaut.destroy();
    }
    
    spawnObstacles();

    
  drawSprites();

  if (World.frameCount>30 && laserGroup.isTouching(astronaut)){
    astronaut.destroy();
  }
}

function spawnObstacles(){
  if(World.frameCount % 30 === 0) {
    laser = createSprite(400,50,40,50);

laser.scale = 0.1;
laser.velocityX = -4;
//PROFUNDIDAD
laser.depth=astronaut.depth  
console.log(laser.depth)
console.log(astronaut.depth)


laser.y = Math.round(random(10,400));

  var rand = Math.round(random(1,2,3));

switch(rand) {
  case 1: laser.addImage(laser1);
          break;
  case 2: laser.addImage(laser2);
          break;
  case 3: laser.addImage(laser3);          
  default: break;
}

laser.lifetime = 100;
laserGroup.add(laser)
  }
}