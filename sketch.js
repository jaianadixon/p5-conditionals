var x=0;
var speed=10;

function setup(){
    createCanvas(600,400);
}

function draw(){
 background(255,0,55);
 
 //I wrote this so background changes to pick when clicked
 if(mouseIsPressed) {
    background(25,150,150); 
 }
 
 //makes outline white,6px thick, no color inside shapes
 stroke(0,0,255);
 strokeWeight(9);
 
 if(mouseY<150){
     fill(150,20,199);
 }
 else{
     noFill();
 }
 
 //a circle
rect(x,125,x,220);
 
 //this code is going to get the cirlce to move  on its own
 if(x>width || x<0){
     console.log("Circle Is Off Th e Screen!!!")
     speed=speed* -1;
 }
    x=x+speed;
 console.log(x);
}