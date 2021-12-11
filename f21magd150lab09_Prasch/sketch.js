//The sound effect used is from the Nintendo Gameboy Advance start-up.
var frame
var captureV
var captureA, reverb
var reverb
var sound

function preload(){
  frame = loadImage('Picture frame.png')
  sound = loadSound('Gamesound.mp3')
  
}

function setup() {
  createCanvas(400, 600)
  //I initialize the reverb here
  reverb = new p5.Reverb()
  
  //This captures the video within the frame.
  captureV= createCapture(VIDEO)
  
  //This captures and plays back audio from the user's microphone.
  
  captureA= createCapture(AUDIO)
 
  //This resizes and hides the initial captured video.
  
  captureV.size(9001)
  captureV.hide()
  
  //I am associating the reverb with the sound effect here.
  
  reverb.process(sound)
 
  
  //a button labeled "Smile!" is created.
  button = createButton('Smile!')
  
  
}

function draw() {
  background(220);
  //reverb setting is changed
  reverb.drywet(1)
  
  //this is responisble for the button's functionality.
button.mousePressed(playSound)
  
  //Here is where the video capture and frame is displayed.
  
  scale(.3)
  image(captureV,360,550,850,1200)
  image(frame,100,height/2)
  
}

//The playSound function is necesarry in order for the button to work.

function playSound() {
  sound.play()
}