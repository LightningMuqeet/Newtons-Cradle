var Newton1,Newton2,Newton3,Newton4,Newton5;
var packageBody,roofObject;
var rope1,rope2,rope3,rope4,rope5;
var bobDiameter;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	bobDiameter = 50;
	
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	roofObject = new RoofObject(400,100,400,10);

	Newton1 = new Newton(200,600,50);
	Newton2 = new Newton(400,600,50);
	Newton3 = new Newton(500,600,50);
	Newton4 = new Newton(600,600,50);
	Newton5 = new Newton(700,600,50);

	rope1 = new Rope(Newton1.body, roofObject.body, -bobDiameter*2, 0);
	rope2 = new Rope(Newton2.body, roofObject.body, -bobDiameter, 0);
	rope3 = new Rope(Newton3.body, roofObject.body, 0, 0);
	rope4 = new Rope(Newton4.body, roofObject.body, bobDiameter, 0);
	rope5 = new Rope(Newton5.body, roofObject.body, bobDiameter*2, 0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("yellow");
  
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  Newton1.display();
  Newton2.display();
  Newton3.display();
  Newton4.display();
  Newton5.display();

  roofObject.display();


  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(Newton1.body, Newton1.body.position, {x:-90, y:-90});
	}
}
