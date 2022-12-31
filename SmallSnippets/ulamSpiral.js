//You can run this on https://editor.p5js.org/

let x,y;
let px,py;
let step = 1;
let state = 0;
let numSteps = 1;
let turnCounter = 1;
let stepSize = 1;
let totalSteps;

function isPrime(value){
  if(value === 1) return false;

  for(let i=2;i<Math.sqrt(value);i++){
    if((value % i) === 0){ 
        return false;
    }
  }
    return true;
}

function setup() {
  createCanvas(1000, 1000);


  // set up spiral
  const cols = width / stepSize;
  const rows = height / stepSize;
  totalSteps = cols * rows;
  x = width / 2;
  y = height / 2;
  px = x;
  py = y;
  background(0);
}

function draw() {
  while(step <= totalSteps){
  if(isPrime(step)){
    fill(255);
    stroke(300);
    point(x,y,stepSize*0.5);
  }
  // line(x, y, px, py);
  px = x;
  py = y;

  

  switch(state){
    case 0:
      x += stepSize;
      break;
    case 1: 
      y -= stepSize
      break;
    case 2:
      x -= stepSize;
      break;
    case 3:
      y += stepSize;
      break;
  }


  
  if(step % numSteps == 0){
    state = (state + 1) % 4;
    turnCounter++;
    if(turnCounter % 2 == 0){
      numSteps++;
    }
    // frameRate(800000000000000000);
  }
  step++;
  // if(step > totalSteps){

  }  
  
}
