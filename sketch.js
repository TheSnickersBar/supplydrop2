var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	zone1Sprite=createSprite(350, 610, 20,100);
	zone1Sprite.shapeColor=color("red")

	zone2Sprite=createSprite(400, 650, 100,20);
	zone2Sprite.shapeColor=color("red")

	zone3Sprite=createSprite(450, 610, 20,100);
	zone3Sprite.shapeColor=color("red")

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.7, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	ground.setAngularVelocity = 1.5;
	 World.add(world, ground);
	 
	zone1 = Bodies.rectangle(350, 670, 20, 100 , {isStatic:true} );
	 ground.setAngularVelocity = 1.5;
	  World.add(world, zone1);
	
    zone2 = Bodies.rectangle(400, 690, 100, 20 , {isStatic:true} );
	ground.setAngularVelocity = 1.5;
	 World.add(world, zone2);
	 
	zone3 = Bodies.rectangle(450, 670, 20, 100 , {isStatic:true} );
	ground.setAngularVelocity = 1.5;
	 World.add(world, zone3);


	Engine.run(engine);
  
	packageSprite.x = packageBody.position.x;
	packageSprite.y = packageBody.position.y;

	
}


function draw() {
  //Engine.update(engine);
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
//   packageSprite.collide(zone1);
//   packageSprite.collide(zone2);
//   packageSprite.collide(zone3);
  
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    Matter.Body.setStatic(packageBody,false);
    
  }
}



