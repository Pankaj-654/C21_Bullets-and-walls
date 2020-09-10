
var bullet;
var wall;
var speed;
var weight;
var thickness;

function setup() {
  createCanvas(1600,400);
  speed  = random(223,321);
  thickness = random(22,83)
  weight = random(30,52);
  bullet   = createSprite(50,200,50,50);
  bullet.shapeColor = color(200,0,50);
  bullet.velocityX = speed;
  wall   = createSprite(1200,200,thickness,height/2);
  wall.shapeColor = color(50,50,50);

}


function draw() {
  background(175,200,55);  

    if(wall.x-bullet.x < (bullet.width+wall.width)/2)
   {
   bullet.velocityX = 0;
   }
   
   /*var deformation = 0.5 * weight * speed * speed/22509;
   if (deformation > 180){
   
    bullet.shapeColor = color(225,0,0);
   }
   if(deformation<180 && deformation>100)
  {
    bullet.shapeColor = color(230,230,0);
  }
   
  if(deformation<100)
  {
  bullet.shapeColor = color(0,225,0);
  }*/

 if(hasCollided(bullet,wall))
{
  bullet.velocity = 0;
  var damage = 0.5 * weight *speed * speed/(thickness * thickness * thickness);

  if(damage>10)
  {
    wall.shapeColor = color(255,0,0);
  }
  
  if (damage<10)
{
  wall.shapeColor = color(225,0,0);
}

}


  drawSprites();
}









                                            
