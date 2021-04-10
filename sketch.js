
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground
var hammer
var rubber
var stone
var plane
function preload()
{
	
}

function setup() {
	createCanvas(1800, 700);




	engine = Engine.create();
	world = engine.world;
	var plane=new Plane(900,500,1800,500)


	var hammer=new Hammer(540,90,100,50)
	//Create the Bodies Here.


	
  
}


function draw() {
 
  background("PaleTurquoise");
Engine.update(engine)


plane.display();
hammer.display();


}



