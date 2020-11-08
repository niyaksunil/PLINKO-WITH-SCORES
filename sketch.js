// created the constant variables
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
 
// created the variables
var divisions = [];
var plinkos = [];
var border,border2;
var particle;
var score = 0;
var divisionHeight=300;
var turn = 0;
var gameState = "play";

function setup(){
  createCanvas(800, 650);

// created the engine and world
  engine = Engine.create();
  world = engine.world;

// created the borders
  border = new Border(0,325,5,height);
  border2 = new Border(800,325,5,height);

// created the divisions using for loop
  for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }

// created the plinkos using for loop
  for (var j = 25; j <=width; j=j+50){
    plinkos.push(new Plinko(j,65));
  }

  for (var j = 50; j <=width-10; j=j+50){ 
    plinkos.push(new Plinko(j,130));
  }

  for (var j = 25; j <=width; j=j+50){ 
    plinkos.push(new Plinko(j,195));
  }

  for (var j = 50; j <=width-10; j=j+50){ 
    plinkos.push(new Plinko(j,260));
  }
      
}
 
function draw() {
  background("black");
  textSize(20);

// updated the Engine
  Engine.update(engine);
 
// displaying the plinkos
  for (var i = 0; i < plinkos.length; i++) {
    plinkos[i].display();
  }

// displaying the divisions
  for (var k = 0; k < divisions.length; k++) {
    divisions[k].display();
  }

// functions while the particle != null
  if(particle != null){

// displaying the particle
    particle.display();

// functions while the particle's position > 640
    if(particle.body.position.y > 640){

// increasing the score in the required position
      if(particle.body.position.x < 300){
        score  = score + 500;
        particle = null;
        if(turn >= 5){
          gameState = "end";
        }

      }else{
        if(particle.body.position.x > 301 && particle.body.position.x < 600 ){
          score = score + 100;
          particle = null;
          if(turn >= 5){
            gameState = "end";
          }

      }else{
        if(particle.body.position.x > 601 && particle.body.position.x < 900 ){
          score = score + 200;
          particle = null;
          if(turn >= 5){
            gameState = "end";
          }
        }
      }
    }
  }
}

// displaying the scores
  text("Score : " + score ,20,30);
  text("500",23,370);
  text("500",102,370);
  text("500",183,370);
  text("500",265,370);
  text("100",340,370);
  text("100",420,370);
  text("100",503,370);
  text("200",585,370);
  text("200",664,370);
  text("200",744,370);

// functions while the gameState is at "end" position
  if(gameState === "end" ){
    textSize(85);
    text("Gameover", 174,335);
  }

// displaying the borders
  border.display();
  border2.display();

}

// created the function mouseClicked
function mouseClicked() {
  if( gameState === "play"){
    turn++;
    particle = new Particle(mouseX,10,10,10);
  }
}

