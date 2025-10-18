//Create a random walker that has a greater tendency to move down and to the right. (A partial solution follows in the next section.)
let walker
function setup() {
  createCanvas(400, 400);
  walker = new Walker();
}

function draw() {
  background(220);
  walker.step();
  walker.show();
}

class Walker{
  constructor(){
    this.x=width/2;
    this.y=height/2;
  }
  step(){
    let stepx=random(-1,2);
    let stepy=random(-1,2);
    this.x += stepx;
    this.y += stepy;
  }
  show(){
    point(this.x,this.y);
  }
}
