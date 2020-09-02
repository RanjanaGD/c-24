class ball{
    constructor(x, y, r){
        var options = {
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2
    }
this.body=Bodies.circle(this.x,this.y,this.r/2,options)
World.add(world,this.body);
    }

display(){
    fill("red");
    push();
    translate(this.body.position.x,this.body.position.y)
    ellipseMode(RADIUS);
    ellipse(0,0,this.r,this.r);
    pop();
  }



}