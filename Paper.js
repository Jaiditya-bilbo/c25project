class Paper {
    constructor(x, y, r) 
{
    
      var options = {
          isStatic:false,
        density:1.2,
        friction: 0,
        restitution:0.3
      };

      this.r = r;
      this.image = loadImage("paper.png")
      this.body = Bodies.circle(x, y, r, options);
      World.add(world, this.body);

    };
    display(){
      var pos = this.body.position;
      push();
      translate(pos.x, pos.y);
      imageMode(CENTER)
      ellipse(0,0,this.r, this.r);
      image(this.image, 0, 0, 2*this.r, 2*this.r)
      pop();
    };
  }
