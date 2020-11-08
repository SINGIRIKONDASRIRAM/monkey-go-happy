
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var bananaGroup, obstacleGroup;
var score;
var ground;
var invisibleGround;
var survivalTimes=0;
function preload(){
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png");
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
}



function setup() {
  createCanvas(600,600)
  invisibleGround=createSprite(300,590,600,10);
  //invisibleGround.visible = false;
  monkey = createSprite(200,580,20,40)
  monkey.addAnimation("running",monkey_running);
  monkey.scale=0.2;
 
  ground = createSprite(600,590,1200,10);
  ground.velocityX=-4;
  ground.x=ground.width/2;
  console.log(ground.x);
}


function draw() {
  background("green")
  console.log(monkey.y);
if(keyDown("space")) {
    monkey.velocityY = -10;
  }
  monkey.velocityY=monkey.velocityY+0.8;

  monkey.collide(invisibleGround);
  
  if(ground.x<0){
    ground.x=300;
  }
  
  spawnObstacles();
  spawnBanana();
  drawSprites();
  survivalTime();
  score = score + Math.round(getFrameRate()/60);
}
function survivalTime(){
  stroke("white");
  textSize(20);
  fill("white");
  text("score: " + score,500,50);
  stroke("black");
  textSize(20);
  fill("black");
  survivalTimes=Math.ceil(frameCount/frameRate());
  text("survivalTime :"+survivalTimes  ,100,50);
}

function spawnBanana(){
  if(frameCount % 80 == 0){
    var banana = createSprite(600,80,20,20)
    banana.velocityX = -2;
    banana.addImage(bananaImage);
    var rand = Math.round(random(380,420));
    banana.y = rand;
    banana.scale = 0.07;
    banana.lifetime = 300;
  }
}

function spawnObstacles(){
  
  if (frameCount%300 ==0){
  obstacle = createSprite(600,580,200,40);
  obstacle.addImage(obstacleImage);
  obstacle.scale=0.09;
  obstacle.velocityX=-2;
  obstacle.lifetime=300;
  }
    
}



