const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
var engine, world;

var player1,player2
var rando
var land
var mountainImg,caveImg,forestImg,plainsImg,volcanoImg,mainImg
var boxes = [];
var coins = []

function preload(){
  mountainImg = loadImage("game pics/mountain.jpg")
  caveImg = loadImage('game pics/cave.jpg')
  forestImg = loadImage("game pics/forest.jpg")
  plainsImg = loadImage('game pics/plains.png')
  volcanoImg = loadImage("game pics/volcano.png")
  mainImg = loadImage("game pics/Main background1.jpg")
}
function setup() {
  createCanvas(displayWidth, displayHeight);
  engine = Engine.create();
  world = engine.world;
  rando = Math.round(random(1,2))
  if(rando===1){
    player1 = new Player(100,854,45,119,"B")
    player2 = new Player(200,854,55,119,"p")
}else{
    player1 = new Player(100,854,55,119,"P")
    player2 = new Player(200,854,45,119,"B")
}
  
land = new Ground(837.5,855,1674,10)
  
game = new Game();
game.getState();
game.start();

}

function draw() {
  Engine.update(engine);
  background(mainImg);
  player1.display()
  player2.display()
//land.display()
  
  for (var p = 0; p < boxes.length; p++){
    boxes[p].display();
  }

  if (frameCount%50 === 0) {
    boxes.push(new Box(random(0,1674),-10,50,50));
  } 

  for (var c = 0; c < coins.length; c++){
    coins[c].display();
  }

  if (frameCount%50 === 0) {
    coins.push(new Coin(random(0,480),-10,50,50));
  }
  
    
  if (playerCount === 2) {
    game.update(1);
  }
  if (gameState === 1) {
    clear(); 
    game.play();
  }
  if (gameState === 2) {
    game.end();
  }



}
