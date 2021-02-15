class Box {
    constructor(x, y) {
      var options = {
          'restitution':0.5,
          'friction':1.0,
          'density':0.5
      }
      this.body = Bodies.rectangle(x, y, 30, 40, options);
      this.width = 30;
      this.height = 40;
      this.visibility = 255;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      console.log(this.body.speed );
      if(this.body.speed < 4){
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        rect(0, 0, this.width, this.height);
        pop();
      }else {
        World.remove(world, this.body);
        push();
        this.visibility = this.visibility - 5;
        tint(255, this.visibility);
        rectMode(CENTER);
        rect(0, 0, this.width, this.height);
        pop();
      }
    }
  };