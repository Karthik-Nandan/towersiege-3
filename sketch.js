const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var block1, block2, block3, block4, block5, block6, block7, block8, block9;
var block10,block11,block12, block13, block14;
var player;
var ground1, ground2, ground3;

var block15, block16, block17, block18, block19, block20, block21;
var block22;
var sling;
var player;

var ball;
var img;
var back;
var scoregame = 0;


function preload(){
  img = loadImage("hexagon (1).png");
 // back = loadImage("back.jpg");
  getTime()
}

function setup() {
  createCanvas(1500,600);
  engine = Engine.create();
    world = engine.world;
    Engine.run(engine);

  block1 = new Block(600,260,30,40);
  block2 = new Block(570,260,30,40);
  block3 = new Block(540,260,30,40);
  block4 = new Block(630,260,30,40);
  block5 = new Block(660,260,30,40);



  block6 = new Block(585,220,30,40);
  block7 = new Block(555,220,30,40);
  block8 = new Block(615,220,30,40);
  block9 = new Block(645,220,30,40);



  bolck10 = new Block(600,170,30,40);
  block11 = new Block(570,180,30,40);
  block12 = new Block(630,180,30,40);


  block13 = new Block(600,140,30,40);

  ground1 = new Ground(600,285,200,10);
  ground2 = new Ground(900,195,200,10);
  ground3 = new Ground(750, 600, 1500, 10);


  block14 = new Block(900,170,30,40);
  block15 = new Block(930,170,30,40);
  block16 = new Block(870,170,30,40);
  block17 = new Block(840,170,30,40);
  block18 = new Block(960,170,30,40);

  block19 = new Block(900,140,30,40);
  block20 = new Block(930,140,30,40);
  block21 = new Block(870,140,30,40);

  block22 = new Block(900,110,30,40);

  //player = new Player(50,200,30,30);

  player = Bodies.circle(50,200,20);
  World.add(world,player);

  sling = new Chain(this.player,{x:150, y:160});

}

function draw() {
  
  if(back) 
  background(back);
  //Engine.update(engine);

  fill(rgb(135, 205, 236));
  
  textSize(35);
  text("Score:"+ scoregame, width-300,50)
  console.log(scoregame)
  Engine.update(engine);  

  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();

  block1.score();
  block2.score();
  block3.score();
  block4.score();
  block5.score();

  fill("lightBlue");
  block6.display();
  block7.display();
  block8.display();
  block9.display();

  block6.score();
  block7.score();
  block8.score();
  block9.score();

  fill("lightPink");
  bolck10.display();
  block11.display();
  block12.display();

  bolck10.score();
  block11.score();
  block12.score();
  fill(rgb(47, 48, 48));

  block13.display();
  block13.score();

  fill(rgb(135, 205, 236));
  block14.display();
  block15.display();
  block16.display();
  block17.display();
  block18.display();

  block14.score();
  block15.score();
  block16.score();
  block17.score();
  block18.score();
  fill("lightGreen");

  block19.display();
  block20.display();
  block21.display();

  block19.score();
  block20.score();
  block21.score();
  fill("lime");

  block22.display();

  ground1.display();
  ground2.display();
  ground3.display();

  imageMode(CENTER);
  image(img,player.position.x,player.position.y,40,40);

  sling.display();
}


function mouseDragged(){
  Matter.Body.setPosition(this.player,{x: mouseX , y: mouseY});
}


function mouseReleased(){
  sling.fly();
}

function keyPressed(){
	if(keyCode===32)
	{
    
        
       sling.attach(this.player);
       
        
	}
}
async function getTime() {
  
  var getinfo= await   fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata")
  var infotype = await getinfo.json();
  console.log(infotype)
    
  var time = infotype.datetime;
  console.log(time);

  var hr = time.slice(11,13);
  console.log(hr);

  if(hr >= 6 && hr <=18) {
      back = "sprites/bg1.jpg";
  } else {
    back = "sprites/bg2.jpg";
  }

  back= loadImage(back);
  console.log(back)
}