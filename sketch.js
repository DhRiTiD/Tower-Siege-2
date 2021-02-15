//namespaces
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

//global variables
var engine, world;
var polygon, ground, pltfrm1, pltfrm2, launcher;
var image, sound;
var b1, b2, b3, b4, b5, b6, b7, b8, b9, b10, b11, b12, b13, b14, b15, b16, b17, b18, b19, b20, b21, b22;

function preload(){
  BG = loadImage("image.jpg");
  sound = loadSound("SONG.mp3");
}
function setup() {
  createCanvas(1000, 450);

  engine = Engine.create();
  world = engine.world;  

  sound.play();

  ground = new Ground(500, height-10, width,28);
  polygon = new Polygon(150, 260, 20);
  launcher = new Sling(polygon.body, {x:150, y:260});

  b1 = new Box(480, 275);
  b2 = new Box(510, 275);
  b3 = new Box(540, 275);
  b4 = new Box(570, 275);
  b5 = new Box(600, 275);
  b6 = new Box(450, 275);
  b7 = new Box(630, 275);
  b8 = new Box(480, 235);
  b9 = new Box(510, 235);
  b10 = new Box(540, 235);
  b11 = new Box(570, 235);
  b12 = new Box(600, 235);
  b13 = new Box(510, 195);
  b14 = new Box(540, 195);
  b15 = new Box(570, 195);
  b16 = new Box(540, 155);
  b17 = new Box(800, 100);
  b18 = new Box(800, 140);
  b19 = new Box(830, 140);
  b20 = new Box(770, 140);
  b21 = new Box(800, 180);
  b22 = new Box(830, 180);
  b23 = new Box(860, 180);
  b24 = new Box(770, 180);
  b25 = new Box(740, 180);
  pltfrm1 = new Ground(540, 325, 270, 15);
  pltfrm2 = new Ground(800, 225, 220, 15);
}

function draw() {
  background(BG);   
  Engine.update(engine);
  
  textSize(28);
  fill("#A1ECFF")
  textFont("Segoe Print");
  text("Drag the hexagon to take a shot!", 20, 50);
  text("Press SPACE to get another chance!", 20, 80);


  polygon.display();
  launcher.display();

  fill(135,206,234);
  b1.display();
  b2.display();
  b3.display();
  b4.display();
  b5.display();
  b6.display();
  b7.display();

  fill("pink");
  b8.display();
  b9.display();
  b10.display();
  b11.display();
  b12.display();

  fill("yellow");
  b13.display();
  b14.display();
  b15.display();

  fill("lightgreen");
  b16.display();

  fill(254,192,203);
  b17.display();

  fill(63,224,208);
  b18.display();
  b19.display();
  b20.display();

  fill(135,206,234);
  b21.display();
  b22.display();
  b23.display();
  b24.display();
  b25.display();

  pltfrm1.display();
  pltfrm2.display();
}

function mouseDragged(){
      Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
  launcher.fly();
}

function keyPressed(){
  if(keyCode === 32){
     Matter.Body.setPosition(polygon.body, {x: 150 , y: 260});
     launcher.attach(polygon.body);
  }
}