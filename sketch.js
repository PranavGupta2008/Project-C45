var bg, bgImg
var bottomGround
var topGround
var balloon, balloonImg
var obsBottom;
var obsBottomImg1,obsBottomImg2,obsBottomImg3;

var invisibleGround;

function preload(){
bgImg = loadImage("assets/bg.png")

balloonImg = loadAnimation("assets/balloon1.png","assets/balloon2.png","assets/balloon3.png")

obsBottomImg1 = loadImage("assets/obsBottom1.png");

obsBottomImg2 = loadImage("assets/obsBottom2.png");

obsBottomImg3 = loadImage("assets/obsBottom3.png");
}

function setup(){

createCanvas(1000,500);

//background image
bg = createSprite(600,250,1000,500);
bg.addImage(bgImg);
bg.scale = 1;
bg.velocityX=-3;

//creating top and bottom grounds
bottomGround = createSprite(200,490,1800,20);
bottomGround.shapeColor="brown";

topGround = createSprite(200,10,800,20);
topGround.visible = false;
      
//creating balloon     
balloon = createSprite(100,200,20,50);
balloon.addAnimation("balloon",balloonImg);
balloon.scale = 0.27;



}

function draw() {
  
  background("black");
        
          //making the hot air balloon jump
          if(keyDown("space")) {
            balloon.velocityY = -6 ;
            
          }

          //adding gravity
           balloon.velocityY = balloon.velocityY + 1;
              
           console.log(bg.x);

           if(bg.x<400){
             bg.x = bg.width/2;
             
           }

           // making the balloon collide with bottom ground
           balloon.collide(bottomGround);
           
           if(keyDown("DOWN_ARROW")){
             balloon.y = balloon.y+5;
           }
        
        spawnBottomObs();
        drawSprites();
        
}
  function spawnBottomObs(){
    if(frameCount%185 === 0){
    obsBottom = createSprite(950,360);
    obsBottom.velocityX = -2;
    obsBottom.lifetime=500;
    var rand = Math.round(random(1,3));
    switch(rand){
      case 1:obsBottom.addImage(obsBottomImg1);
      obsBottom.scale = 0.13;
      break;

      case 2:obsBottom.addImage(obsBottomImg2);
      obsBottom.scale = 0.13;
      break;

      case 3:obsBottom.addImage(obsBottomImg3);
      obsBottom.scale = 0.13;
      break;
      default:break;
    }
  obsBottom.depth=balloon.depth; 
  balloon.depth+=1;

    }  
  }





