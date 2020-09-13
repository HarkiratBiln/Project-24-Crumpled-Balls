//Creating the Variables
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

var dustbinObject, paperObject
var groundObject, world;


function setup() {
	createCanvas(1600, 700);
    rectMode(CENTER);

	//Creating the Engines and World
	engine = Engine.create();
	world = engine.world;

	//Creating the Dustbin Object
	dustbinObject = new dustbin(1200,650)

	//Creating the Paper Object
	paperObject = new paper(200,450,40);

	//Creating the Ground
	groundObject = new groundObject(width/2, 670, width, 20);

	//Creating the Render
	var render = Render.create({
	element: document.body,
	engine: engine,
	options: {
		width: 1200,
		height: 700,
		wireframes: false

	}
	});


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  dustbinObject.display();
  paperObject.display();
  groundObject.display();


 
}

function keyPressed() {
	if(keyCode === UP_ARROW) {
		Matter.Body.applyForce(paperObject.body,paperObject.body.position, {x: 85, y: -85});

	}

}


