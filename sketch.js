var mr , fr;
function setup() {
  createCanvas(800,400);
  mr =createSprite(400, 200, 50, 50);
  fr=createSprite(600,200,50,100)
  fr.shapeColor="green"
  mr.shapeColor="green"

}

function draw() {
  background(0);  
  mr.x=World.mouseX
  mr.y=World.mouseY
  if(mr.x-fr.x<=mr.width/2+fr.width/2&&fr.x-mr.x<=mr.width/2+fr.width/2&&fr.y-mr.y<=fr.height/2+mr.height/2&&mr.y-fr.y<=mr.height/2+fr.height/2){
    fr.shapeColor="red"
    mr.shapeColor="red"
  }

  else{
    fr.shapeColor="green"
    mr.shapeColor="green"
  }
  drawSprites();
}