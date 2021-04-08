const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint=Matter.Constraint;

var block8,block9,block10,block11,block12;
var block13,block14,block15,block16;
var polygon,paperIMG,ground1;
var slingshot,stand1;

function preload(){
    paperIMG=loadImage("paper.png")
}
function setup(){
    var canvas=createCanvas(1200,400)
    engine=Engine.create();
    world=engine.world;

    block8=new Block(330,235,30,40)
    block9=new Block(360,235,30,40)
    block10=new Block(390,235,30,40)
    block11=new Block(420,235,30,40)
    block12=new Block(450,235,30,40)

    block13=new Block(360,195,30,40)
    block14=new Block(390,195,30,40)
    block15=new Block(420,195,30,40)

    block16=new Block(390,155,30,40)

    ground1=new Ground()

    polygon= Bodies.circle(50,200,20)
    //polygon.addImage(paperIMG)
    World.add(world,polygon)

    slingshot=new SlingShot(this.polygon,{x:100,y:200})
    stand1 = new Stand(390,300,250,10);

}

function draw(){
    background("pink")
    Engine.update(engine)

    imageMode(CENTER)
    image(paperIMG,polygon.position.x,polygon.position.y,40,40)

    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();
    block13.display();
    block14.display();
    block15.display();
    block16.display();
    ground1.display();
    slingshot.display();
    stand1.display();
}

function mouseDragged(){
    Matter.Body.setPosition(this.polygon,{x:mouseX,y:mouseY})
}

function mouseReleased(){
    slingshot.fly()
}