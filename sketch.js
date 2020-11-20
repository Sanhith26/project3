
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 500);


	engine = Engine.create();
	world = engine.world;

	d1=new Dustbin(1200,465,170,20)
	d2=new Dustbin(1105,415,20,120)
	d3=new Dustbin(1295,415,20,120)

	ground=new Ground(80,490,1600,30)

	paper=new Paper(100,360,20)
	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine)
  
 d1.display();
 d2.display();
 d3.display();
 ground.display();
 paper.display();
}

function keyPressed(){
	if(Keycode===UP_ARROW) {
		Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85});
	}
}



