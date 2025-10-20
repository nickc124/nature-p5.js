let walker
function setup() {
  createCanvas(400, 400);
  walker = new Walker();
}

function draw() {
  walker.step();
  walker.show();
}
class Walker{
  constructor(){
    this.x=200;
    this.y=200;
  }
  rand(){
    let r1 = random()
    while(random()>r1){
      r1 = random();
    }
    return r1;
  }
  step(){
      // A uniform distribution of random step sizes. Change this!
    let step = 10* this.rand();
    let stepx = random(-step, step);
    let stepy = random(-step, step);
    this.x += stepx;
    this.y += stepy;
  }
  show(){
    stroke('red')
    point(this.x,this.y)
  }
}
