const Engine=Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies
var world,engine,ground,ball;
function setup() {
  createCanvas(800,400);
 engine=Engine.create();
 world=engine.world
 var groundoption={
   isStatic:true
 }
 var balloption={
   restitution:1.8
 }
ground=Bodies.rectangle(200,390,200,20,groundoption);
ball=Bodies.circle(200,100,10,balloption)
World.add(world,ground)
World.add(world,ball)
}

function draw() {
  background(255,255,255);  
 Engine.update(engine)
 rectMode(CENTER)
 rect(ground.position.x,ground.position.y,400,20)
 ellipseMode(RADIUS)
 ellipse(ball.position.x,ball.position.y,20,20)
}