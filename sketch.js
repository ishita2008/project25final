
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper
var box2
var ground





function setup() {
	createCanvas(800, 600);


	engine = Engine.create();
	world = engine.world;

	paper=new Paper(10,480,50)

	ground=new Ground(200,550,1500,30)



	box2=new Box(700,400,30,200);


	
	
	
	

	

	

	


	


	



	

	
	


	
  
}


function draw() {
	
background("violet");

Engine.update(engine)
 

 
keyDownpressed();


  
drawSprites(); 




 


paper.display();
box2.display();

 
ground.display();






 
 
}
function keyDownpressed() {
	if(keyDown(UP_ARROW)){
	
	Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85});
		
	}
}
	


