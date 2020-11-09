var wall,thickness;
var bullet,speed,weight;
var damage;
function setup() {
  createCanvas(1350,325);

speed = random(55,88)
weight = random(30,52)
thickness = random(22,88)

 wall = createSprite(1300, 160, thickness, height/2);
 wall.shapeColor = "indigo"


 bullet = createSprite(100,160,13,3)
 bullet.shapeColor = "pjahink"
bullet .velocityX = speed;
}

function draw() {
  background("lightBlue"); 
  
  
if(isTouching(wall,bullet)){
  bullet.velocityX = 0;
  var damage= 0.5* weight * speed * speed/(thickness * thickness * thickness)
  if(damage>10){
    wall.shapeColor = color(230,0,0)
  }
  
  if(damage<10){
    wall.shapeColor = color(0,230,0)
  }
  
}
  drawSprites();
}