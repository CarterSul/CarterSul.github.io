let Y;
let X;
let gravity;
let upwards;
let YSpeed;
let XSpeed;
let LeftLoop=false;
let RightLoop=false;
let cnv;
let h=0;
let w=0;


function setup() {
  cnv = createCanvas(150, 350);
  Y = height/2;
  gravity=0.4;
  XSpeed=0;
  X = width/2;
  YSpeed=1;
}

function draw() {
  background(220);
  //gravity
  YSpeed += gravity;
  Y += YSpeed;
  X += XSpeed;
  if(Y>=height-10){Y-=YSpeed;YSpeed=YSpeed*-0.7;}
  fill(0,0,0);
  noStroke();
  ellipse(X,Y,20,20);
  
  
  if(X-10<0||X+10>width){X-=XSpeed;XSpeed=0;}
  
  
  if (LeftLoop&&XSpeed<3){
  XSpeed -= 0.07;
  }
  if (RightLoop&&XSpeed>-3){
  XSpeed += 0.07;
  }
  
  XSpeed=XSpeed/1.01

  
}



function windowResized() {
  resizeCanvas(  
  (windowWidth)/1.07 ,
  (windowHeight)/1.07);
  

 // X-=w-windowWidth;  
 // h=windowHeight;
 // w=windowWidth;
  
  cnv.position((windowWidth-width)/2,(windowHeight-height)/2);
  
  if(X+10>=width){X=width-10;XSpeed-=6;}else if(X-10<=0) {XSpeed += 6;X=10;}
  if(Y>height){Y=height-10;YSpeed-=4;}
  
  
  

}



function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    LeftLoop=true;
  } else if (keyCode === RIGHT_ARROW) {
    RightLoop=true;
  }
}

function keyReleased() {
  if (keyCode === LEFT_ARROW) {
    LeftLoop=false;
  } else if (keyCode === RIGHT_ARROW) {
    RightLoop=false;
  }
}
