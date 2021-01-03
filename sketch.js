
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper, bottom, leftSide, rightSide, ground;


function setup() {
	createCanvas(800, 400);
    

	engine = Engine.create();
	world = engine.world;

	//creating bodies
	paper = new Paper(100, 300, 10);
	bottom = new DustBin(645, 340, 115, 15);
	leftSide = new DustBin(593, 325, 15, 60);
	rightSide = new DustBin(697, 325, 15, 60);
	ground = new Ground(400, 350, 800, 10);


	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  
  paper.display();
  bottom.display();
  leftSide.display();
  rightSide.display();
  ground.display();

  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW) {
	  Matter.Body.applyForce(paper.body, paper.body.position, {x:12, y: -18})
	}
  }
