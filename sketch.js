const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground;
var groundimg;

var bg

var particles = [];
var plinkos = [];
var divisions = [];

var divisionHeight = 300;

var score = 0;
var count = 0;
var gameState ="start";


function preload(){
  groundimg = loadImage("Ground.png");
  bg = loadImage("Background.png");
}

function setup() {
    createCanvas(480,800);
  
  background.scale = 0.3;
  
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(240, 785, 480, 30);

//create division bodies
for (var i = 0; i <= width; i = i + 80){
  divisions.push(new Division(i, height-divisionHeight/2, 10, divisionHeight));
}

//create plinko bodies
for (var j = 40; j <= width; j = j + 50){
  plinkos.push(new Plinko(j, 75));
}
for (var j = 15; j <= width - 10; j = j + 50){
  plinkos.push(new Plinko(j, 175));
}
for (var j = 40; j <= width; j = j + 50){
  plinkos.push(new Plinko(j,275));
}
for (var j = 15; j <= width - 10; j = j + 50){
  plinkos.push(new Plinko(j, 375));
}

}

function draw() {
  background(bg);  
  Engine.update(engine);
  text("Score : "+score,20,30);
  textSize(35)
  text(" 500 ", 5, 550);
  text(" 500 ", 80, 550);
  text(" 100 ", 160, 550);
  text(" 100 ", 240, 550);
  text(" 200 ", 320, 550);
  text(" 200 ", 400, 550);
  

  if ( count>= 5) {
    gameState ="end";
    textSize(100);
    text("GameOver", 150, 250);
  }

  if (frameCount % 60 === 0){
    particles.push(new Particle(random(width/2-20, width/2+20), 10, 10));
  }

  ground.display();
  
   

  for (var i = 0; i < divisions.length; i++){
    divisions[i].display();
  }

  for (var i = 0; i < plinkos.length; i++){
    plinkos[i].display();
  }

  for (var i = 0; i < particles.length; i++){
    particles[i].display();
  

  if (particles[i].x < 30 && particles[i].y<160) {
    score=score+500;
    particles.pop();
   }
  else if (particles[i].x < 600 && particles[i].x > 301 && particles[i].y > 760) {
    score = score + 100;
    particles.pop();
  }
  else if (particles[i].x < 900 && particles[i].body.position.x > 601 && particles[i].y > 760) {
    score = score + 200;
    particles.pop();
  }
 }

  drawSprites();
 }


 


function mousePressed(){
  if(gameState!=="end"){
      count++;
     particles.push(new Particle(mouseX, 10, 10, 10)); 
  }   
}
