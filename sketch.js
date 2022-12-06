var player1, player2
var racket1, racket2, ball, table
var racket1_img,racket2_img,ball_img, table_img
var cscore=0, pscore=0
var edges

function preload(){
racket1_img = loadImage("racket2.png")
racket2_img = loadImage("racket2.png")
ball_img = loadImage("ball.png")
table_img = loadImage("table.png")

}

function setup(){
createCanvas(windowWidth,windowHeight)


table = createSprite(windowWidth/2,windowHeight/2,windowWidth*5,windowHeight*5)
table.addImage(table_img)
table.scale = 1.8
ball = createSprite(windowWidth/2,windowHeight/2-100,10,10)
ball.addImage(ball_img)
ball.scale= 0.1
ball.velocityY = -5
ball.velocityX= 5


racket1 = createSprite(windowWidth/2,windowHeight/2-100,40,40)
racket1.addImage(racket1_img)
racket1.scale= 0.5
racket1.setCollider("circle",25,-25,70)
racket1.debug= false



racket2 = createSprite(windowWidth/2,windowHeight/2+200,40,40)
racket2.addImage(racket2_img)
racket2. scale= 0.8
racket2.debug= false
racket2.setCollider("circle",25,-25,70)

 
left_boundary = createSprite(windowWidth/4-200, 10,5,windowHeight*2)
left_boundary.visible= false

right_boundary = createSprite(windowWidth/4+800,100,5,windowHeight*2)
right_boundary.visible= false



}


function draw(){
 racket1.x = ball.x
 racket2.x = World.mouseX;
   
 if(ball.bounceOff(racket2)){
  ball.velocityX = -5
  ball.velocityY = -5
 }
 
ball.bounceOff(racket1)

 if(ball.isTouching(left_boundary)){
 ball.x= windowWidth/2
 ball.y= windowHeight/2
 ball.velocityX=5
 ball.velocityY=5
 }

 if(ball.isTouching(right_boundary)){
   ball.x= windowWidth/2
   ball.y= windowHeight/2
   ball.velocityX=-5
   ball.velocityY=-5
   }

 if(keyDown("left")){
    racket2.mirrorX(-1)
    ball.velocityX= -5
    ball.velocityY=-5
    racket2.setCollider("circle",-13,-30,70)
 }  
 if(keyDown("right")){
    racket2.mirrorX(1)
    ball.velocityX= 5
    ball.velocityY=5
    racket1.setCollider("circle",15,-30,70)

 }  



drawSprites();
}