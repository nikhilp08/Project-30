const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var block1,block2,block3,block4,block5,block6,block7,block8,block9;
var polygon;

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);

  engine = Engine.create();
  world = engine.world;
  
  base = new Ground(390,265,200,20)

  block1 = new Block(330,235,30,40);
  block2 = new Block(360,235,30,40);
  block3 = new Block(390,235,30,40);
  block4 = new Block(420,235,30,40);
  block5 = new Block(450,235,30,40);

  block6 = new Block(360,195,30,40);
  block7 = new Block(390,195,30,40);
  block8 = new Block(420,195,30,40);

  block9 = new Block(390,155,30,40);

  polygon = Bodies.circle(50,200,20);
  World.add(world,polygon);

  
  slingshot = new SlingShot(this.polygon,{x:100,y:200});

}


function draw() {
  background("black");  
  Engine.update(engine);

  drawSprites();

  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();

  ellipse(50,200,20,20);
  
}

function mouseDragged(){
  Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingshot.fly();
}


function keyPressed(){
  if(keyCode === 32){
      slingshot.attach(this.polygon);
  }
}