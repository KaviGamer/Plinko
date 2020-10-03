class Particle {
    constructor(x,y) {
      var options = {
          restitution:0.4
      }
      this.r = 10;
      this.body = Bodies.circle(x,y,this.r,options);
      Matter.Body.setVelocity(this.body,{x:0,y:15});
      this.color = color(random(0,255),random(0,255),random(0,255));
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push();
      translate(pos.x, pos.y);
      //imageMode(CENTER);
      noStroke();
      fill(this.color);
      ellipseMode(RADIUS);
      ellipse(0,0,this.r,this.r);
      pop();
    }
  };