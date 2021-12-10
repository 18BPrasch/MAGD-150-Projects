let lives=5
let score=1000
let timer=400
let ground
let mario
let blocks
let mushroom
let cloud
let xstart = 550
let ystart = 97


//I was experimenting with importing images for this assignment. From the video I watched, it seems that preloading is necesarry for images that move around.
function preload(){
  mushroom=loadImage('Mushroom.png')
}

function setup() {
  createCanvas(700, 500);
  ground = loadImage('Ground.jpg')
  blocks = loadImage('Bricks.jpg')
  mario = loadImage('Mario.png')
  cloud = loadImage('Cloud.png')
}

function draw() {
  background(30,157,240);
  //This is where I use all of my transformations. The cloud originally was imported sideways.
  push()
  rotate(HALF_PI)
  image(cloud,-550,-510)
  pop()
  push()
  translate(0,450)
  image(ground,0,0)
  pop()
  image(blocks,500,150)
  image(mario,220,360,100,100)
  push()
  scale(.5)
  image(mario,5,10,100,100)
  pop()
  
  //This segment displays the lives, score, and time remaining.
  
  fill (255)
  textSize(30)
  text("x " + lives,60,40)
  text("score: " + score,250,40)
  text("time: " + timer,575,40)
  
  //functions are called and timer is activated.
  
  mushroomMove ()
  lifeIncrease ()
  scoreIncrease()
  timer = (timer - .016666666666666)
}
 
//This function controls how the mushroom moves. When its x value is the same as the top left edge of the bricks, the mushroom falls. Similarly to the actual game, it falls faster than it moves horizontally.

function mushroomMove(){
  if (xstart<=550 && xstart>230)
  image(mushroom,xstart,ystart,70,55)
  if (xstart>230){
xstart--
  }
  if (xstart<460 && ystart<395){
    ystart= (ystart+2)
    
    
  }
}

//These two are relatively simple functions that add to the score and lives values when the mushroom's X position is at 231. This increase only occurs once since xstart is only equal to 231 for a single frame.

function lifeIncrease(){
if (xstart==231){
  lives = (lives + 1)
}
}

function scoreIncrease(){
  if (xstart==231){
    score = (score + 1000)
  }
}