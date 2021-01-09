const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;

  var player, ground;
  var engine, world;
  var turret1, laser1;

function setup() {
  createCanvas(700,700);
  engine = Engine.create();
  world = engine.world;

  player = new Player(width/2,height-40,20,50);
  ground = new Ground(width/2, height, width/1.5, 50);
  turret = new Turret(width/2,height/2,20,20);
  laser1 = createSprite(width/2,height/2,1,1)
}

function draw() {
  background(200,200,200);  
  Engine.update(engine);
  
  player.display();
  ground.display();
  turret.display();

  laser1.x=turret.x
  laser1.y=turret.y
  rotate(turret.body.angle);

  drawSprites();
}
