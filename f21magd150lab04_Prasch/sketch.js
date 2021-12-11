let pizzaR=191
let pizzaG=108
let pizzaB=73
let cheeseR=255
let cheeseG=230
let cheeseB=55
function setup() {
  createCanvas(500, 500);
  
    print("Press a key to change cheese color. Click the mouse to change the crust.")
  print("Lift the pizza to add pepperoni.")
}

function draw() {
  background(220);
  fill(pizzaR,pizzaG,pizzaB)
  ellipse(mouseX,mouseY,220)
  fill(cheeseR,cheeseG,cheeseB)
  ellipse(mouseX, mouseY,180)
  
  fill(200,20,20)
 
  px=mouseX - 70
  py=mouseY - 70
  while (py<300){
    ellipse(px,mouseY,20);
    px=px+30
    ellipse(mouseX,py,20)
    py=py+30
    ellipse(px,py,20)
    
  }

}

function mousePressed(){
  if (pizzaR===191){
    pizzaR=40;
  }else{
    pizzaR=191
  }
}

function mousePressed(){
  if (pizzaG===108){
    pizzaG=10;
  }else{
    pizzaG=108
  }
}

function mousePressed(){
  if (pizzaB===55){
    pizzaB=10;
  }else{
    pizzaB=55
  }
}


function keyPressed(){
  if (cheeseR===255){
    cheeseR=214;
  }else{
    cheeseR=255
  }
}

function keyPressed(){
  if (cheeseG===230){
    cheeseG=171;
  }else{
    cheeseG=230
  }
}

function keyPressed(){
  if (cheeseB===55){
    cheeseB=25;
  }else{
    cheeseB=55
  }
}
  