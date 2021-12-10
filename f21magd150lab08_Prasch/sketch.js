//This is where I set up my variables and array.
var chiller
var TColor = [255,255,255]
var agency
var Text
var poster

function preload(){
  
//Preloading assets... "Big Dog" comes from Text.txt.
 chiller =  loadFont('CHILLER.TTF')
  dog = loadImage('DOG.png')
  flare = loadImage('Flare.png')
  agency = loadFont('Agency.ttf')
  Text = loadStrings('Text.txt')
  
}
function setup() {
 poster = createCanvas(400, 600,P2D)

}


  function draw() {
  background(30);

  //This is the "Big Dog" text. I used loadStrings to take the words from the .txt file.
  
    textFont(chiller)
    fill(TColor)
    textSize(70)
    textAlign(CENTER)
    text(Text[0],200,200)
    textSize(100)
    text(Text[1],200,480)
    
    //The image of the dog is drawn and modified here.
   
    imageMode(CENTER)
    push()
    scale(.4)
    image(dog,500,800)
    dog.filter(GRAY)
    pop()
    
//The flare effect was added here. I converted it to grayscale in order to properly color it.
  
    push()
    scale(.1)
    flare.filter(GRAY)
     tint(0,250,250)
    image(flare,1500,2500)
    pop()
    
    //Text above the dog. The font I downloaded seems to not be formatted properly.
    
    textFont(agency)
    textSize(40)
    textAlign(LEFT)
    fill(255)
    text("From the minds behind",50,60)
    text(" Hungry Cat ",140,120)
  }

//This function changes the "Big Dog" text color whenever the mouse is clicked.

function mousePressed(){
 if (TColor[0] === 255){
   TColor = [0,255,255]
 } else if (TColor[0] === 0) {
   TColor = [255,255,255]
 }
}

//I wasn't able to get the PDF module working, so I instead used the save feature.

function keyPressed(p){
  save(poster,'BigDog.jpg')
}