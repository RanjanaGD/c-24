
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball1;
var ground;
var dustbin1,dustbin2,dustbin3;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	

  ball1=new ball(200,450,40);
  World.add(world,ball1);
  
  ground=new Ground(400,650,800,10);

dustbin1=new Dustbin(480,615,15,60);
dustbin2=new Dustbin(650,615,15,60);
dustbin3=new Dustbin(565,640,156,10);

 

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  

  
  ball1.display();
  ground.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();

  drawSprites();
 
}


function keyPressed() {
  if (keyCode === UP_ARROW) {
    
   Matter.Body.applyForce( ball1.body,ball1.body.position,{x:90,y:-95});	
   }
 }


