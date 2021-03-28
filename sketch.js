const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, box2, box3,box4,box5,box6,box7,box8,box9,box10;
var hero,monster,rope,ground;

function preload() {
  bg = loadImage("gamingbackground2.png");
}

function setup() {
  createCanvas(1000, 700);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(600, 600, 1200, 50);

  hero = new Hero(200,550,150);
  rope = new Rope(hero.body, { x: 250, y: 500 });
  monster = new Monster(900,550,300);

  box1 = new Box(600, 500, 70, 70);
  box2 = new Box(600, 430, 70, 70);
  box3 = new Box(600, 360, 70, 70);
  box4 = new Box(600, 290, 70, 70);
  box5 = new Box(530,500,70,70)   
  box6 = new Box(530,430,70,70)
  box7 = new Box(670, 500, 70, 70);
  box8 = new Box(670, 430, 70, 70);
  box9 = new Box(670, 360, 70, 70);
  box10 = new Box(670, 290, 70, 70);
  box11 = new Box(670,220,70,70)
}

function draw() {
  background(bg);
  Engine.update(engine);
  ground.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();

  hero.display();
  //rope.display();
  monster.display();

}
function mouseDragged(){
  Matter.Body.setPosition(hero.body,{x:mouseX,y:mouseY})
}
function mouseReleased(){
  rope.fly()
}
function keyPressed(){
  if(keyCode===32){
rope.attach(hero.body)
  }
}
