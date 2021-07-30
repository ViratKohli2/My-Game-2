var mario,marioImage,obstacleImg,cactus1,cactus2,cactus3,cactus4,coin1,coin2,coin3,coinImg,invisibleBlock;
var ground,brick,brick1,b1,boundry_img,b2,ground2,b3,treasure,tr,win,winImg,GameEnd;
var score = 0;
var cardboard1,cardboard2,cardboard3,cardboard4,cardboard5,cardboard6,cardboard7,cardboard8,cardboard9,cardboard10,cardboard11,cardboard12,cardboard13,cardboard14,cardboard15,cardboard16,cardboard17,cardboard18,cardboard19,cardboard20,cardboard21,cardboard22,block;
function preload(){
 marioImage = loadAnimation("mario00.png","mario01.png","mario02.png");
   ground = loadImage("back.png");
   brick = loadImage("b.png");
   brick1 = loadImage("vertical.png")
   boundry_img = loadImage("boundry.png")
   ground2 = loadImage("ground2.png")
   block = loadImage("brick.png")
 obstacleImg = loadAnimation("obstacle1.png","obstacle2.png","obstacle3.png","obstacle4.png")
  coinImg = loadImage("coin.png")
  treasure = loadImage("treasure.png")
  WinImg = loadImage("youWin.png")
  
}
  
function setup(){
  createCanvas(1200,600)
 
  //create a mario sprite
 mario = createSprite(250,100,20,50);
mario.addAnimation("mario",marioImage)
        mario.scale=0.8

  invisibleBlock = createSprite(410,20,10,30)
  invisibleBlock.visible = false

  win = createSprite(860,480,10,100)
  win.visible = false

  GameEnd = createSprite(600,300)
  GameEnd.addImage("Game",WinImg)
  GameEnd.visible = false


  b1 = createSprite(360,350,20,380)
  b1.addImage("boundry",boundry_img)
  b1.scale  = 0.63
  
  b2 = createSprite(600,570,330,20)
  b2.addImage("ground",ground2)
  b2.scale  = 0.43
 
  b3 = createSprite(845,250,20,200)
  b3.addImage("boundry",boundry_img)
  b3.scale  = 0.55
  
  b4 = createSprite(840,540,330,20)
  b4.addImage("brick",block)
  b4.scale  = 1
  
  b5 = createSprite(610,50,330,20)
  b5.addImage("ground",ground2)
  b5.scale  = 0.4
  
cactus1 = createSprite(450,230,20,50);
cactus1.addAnimation("obstacle",obstacleImg)
cactus1.velocityX = 2

cactus2 = createSprite(790,520,20,50);
cactus2.addAnimation("obstacle",obstacleImg)
cactus2.velocityY = -1
  
cactus3 = createSprite(520,530,20,50);
cactus3.addAnimation("obstacle",obstacleImg)
cactus3.velocityX = 2
  
cactus4 = createSprite(600,150,20,50);
cactus4.addAnimation("obstacle",obstacleImg)
cactus4.velocityX = -2

  
coin1 = createSprite(700,520,20,50);
coin1.addImage("coin",coinImg)
coin1.scale = 3
  
coin2 = createSprite(800,100,20,50);
coin2.addImage("coin",coinImg)
coin2.scale = 3
  
coin3 = createSprite(390,300,20,50)
coin3.addImage("coin",coinImg)
coin3.scale = 3

tr = createSprite(600,330,20,50)
tr.addImage("treasure",treasure)
tr.scale = 2
  
   cardboard1 = createSprite(410,80,100,20);
   cardboard1.addImage(brick)
   cardboard1.scale = 0.3;

   cardboard2 = createSprite(760,200,100,20);
   cardboard2.addImage(brick)
   cardboard2.scale = 0.3;

    cardboard3 = createSprite(515,110,20,200);
    cardboard3.addImage(brick1)
    cardboard3.scale = 0.4;

  cardboard4 = createSprite(550,270,100,20);
  cardboard4.addImage(brick)
  cardboard4.scale = 0.3;
  
  cardboard5 = createSprite(420,295,20,100);
  cardboard5.addImage(brick1)
  cardboard5.scale = 0.4;

   cardboard6 = createSprite(680,260,20,100);
   cardboard6.addImage(brick1)
   cardboard6.scale = 0.3;
  
   cardboard7 = createSprite(551,329,20,100);
   cardboard7.addImage(brick1)
   cardboard7.scale = 0.4;

   cardboard8 = createSprite(610,360,100,20);
   cardboard8.addImage(brick)
   cardboard8.scale = 0.3;

   cardboard9 = createSprite(610,200,100,20);
   cardboard9.addImage(brick)
   cardboard9.scale = 0.3;

  cardboard10 = createSprite(410,150,100,20);
  cardboard10.addImage(brick)
  cardboard10.scale = 0.3;
  
   cardboard11 = createSprite(740,510,20,100);
   cardboard11.addImage(brick1)
   cardboard11.scale = 0.4;
  
    cardboard12 = createSprite(700,450,100,20);
    cardboard12.addImage(brick)
    cardboard12.scale = 0.3;
  
    cardboard13 = createSprite(410,390,100,20);
    cardboard13.addImage(brick)
    cardboard13.scale = 0.3;
   
   cardboard14 = createSprite(405,470,100,20);
   cardboard14.addImage(brick)
   cardboard14.scale = 0.3;
   
   cardboard15 = createSprite(790,140,100,20);
   cardboard15.addImage(brick)
   cardboard15.scale = 0.3;
  
   cardboard16 = createSprite(790,295,20,100);
   cardboard16.addImage(brick1)
   cardboard16.scale = 0.3;
   
  cardboard17 = createSprite(580,420,100,20);
  cardboard17.addImage(brick)
  cardboard17.scale = 0.3;
  
    cardboard18 = createSprite(580,480,20,100);
    cardboard18.addImage(brick)
    cardboard18.scale = 0.3;
   
   cardboard19 = createSprite(660,110,20,100);
   cardboard19.addImage(brick)
   cardboard19.scale = 0.3;
   
   cardboard20 = createSprite(710,295,100,20);
   cardboard20.addImage(brick)
   cardboard20.scale = 0.3;
  
    cardboard21 = createSprite(765,365,100,20);
    cardboard21.addImage(brick)
    cardboard21.scale = 0.3;
   
    cardboard22 = createSprite(490,480,20,100);
    cardboard22.addImage(brick1)
    cardboard22.scale = 0.3;

   fill("brown")
  
  
  
  
}

function draw(){
  background(ground)
  textSize(30)
  text("Score "+score,900,30)

if(keyDown("UP_ARROW")){
  mario.y = mario.y-3
  }
if(keyDown("DOWN_ARROW")){
  mario.y = mario.y+3
}
if(keyDown("RIGHT_ARROW")){
  mario.x = mario.x+3
}
if(keyDown("LEFT_ARROW")){
  mario.x = mario.x-3
}

cactus1.bounceOff(b1);
cactus1.bounceOff(cardboard6);
cactus2.bounceOff(cardboard21);
cactus2.bounceOff(b2);
cactus3.bounceOff(cardboard11);
cactus3.bounceOff(cardboard22);
cactus4.bounceOff(cardboard3);
cactus4.bounceOff(cardboard15);





if(mario.isTouching(cactus1)||mario.isTouching(cactus2)||mario.isTouching(cactus3)||mario.isTouching(cactus4)){
  mario.x = 250
  mario.y = 100
}

/*if(mario.isTouching(cardboard1)||
mario.isTouching(cardboard2)||
mario.isTouching(cardboard3)||
mario.isTouching(cardboard4)||
mario.isTouching(cardboard5)||
mario.isTouching(cardboard6)||
mario.isTouching(cardboard7)||
mario.isTouching(cardboard8)||
mario.isTouching(cardboard9)||
mario.isTouching(cardboard10)||
mario.isTouching(cardboard11)||
mario.isTouching(cardboard12)||
mario.isTouching(cardboard13)||
mario.isTouching(cardboard14)||
mario.isTouching(cardboard15)||
mario.isTouching(cardboard16)||
mario.isTouching(cardboard17)||
mario.isTouching(cardboard18)||
mario.isTouching(cardboard19)||
mario.isTouching(cardboard20)||
mario.isTouching(cardboard21)||
mario.isTouching(cardboard22)||
mario.isTouching(b1)||
mario.isTouching(b2)||
mario.isTouching(b3)||
mario.isTouching(b4)||
mario.isTouching(invisibleBlock)||
mario.isTouching(b5)){
mario.x = 250
mario.y = 100
}*/

if(mario.isTouching(coin1)){
  score = score+20
  coin1.destroy();
  }

  if( mario.isTouching(coin2)){
     score = score+20
     coin2.destroy();
    }
 
  if(mario.isTouching(coin3)){
    score = score+20
    coin3.destroy();
  }
  if(mario.isTouching(tr)){
    score = score+100
    tr.destroy();
  }

   if(mario.isTouching(win)){
    GameEnd.visible = true
    tr.depth = GameEnd.depth
    GameEnd.depth = GameEnd.depth+1
    mario.velocityX = 0
    mario.velocityY = 0
   }

  




  
  drawSprites();
 
 
}

