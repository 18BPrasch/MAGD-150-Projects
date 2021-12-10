let r=0;
let g=0;
let b= 0;
let r1=0;
let g1=0;
let b1=0;
function setup() {
createCanvas(400, 400);
frameRate(15);
textSize(20);
textAlign(LEFT);
}


function draw() {

let Left=40;
let Right=360;
let Up=310;
let Down=400;
let X=mouseX;
let Y=mouseY;
let XC=constrain(X,Left,Right);
let YC=constrain(Y,Up,Down);
let bubbleA = XC;
let bubbleB = Y-50.1;
let Sbubble = bubbleB/2;
let D=dist(XC,YC,bubbleA,bubbleB);
let LX=lerp(YC,bubbleB,.1);


r = ( mouseY) % 256;
g = ( mouseX) % 256;
b = (b+5) % 256;
  
r1=(mouseX) % 256;
g1=(mouseY) % 256;
b1=(b-5) % 256;


background(220);

text(frameCount,width/16,height/9);
 
//Wand
  
strokeWeight(3);
line(XC,YC,XC,400);
strokeWeight(1);
ellipse(XC,YC,80);
  
//Bubbles

push();
fill(r,g,b);
ellipse(bubbleA,bubbleB,bubbleB);
pop();
  
push();
fill(r1,g1,b1);
ellipse(bubbleA,bubbleB,Sbubble);
pop();

ellipse(LX,mouseY,30);

print("bubble X: " + (mouseX));
print("bubble Y: " + (mouseY));
print("Distance: " + (D));
}