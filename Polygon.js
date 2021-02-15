class Polygon{
	constructor(x,y,r){
	  var options = {
		  'restitution' :0,
      'friction' : 0.5,
      'density' : 2.0
	}
	this.x = x;
	this.y = y;
	this.r = r
	this.image = loadImage("polygon.png");
	this.body = Bodies.circle(this.x, this.y, this.r, options)
	World.add(world, this.body);
	}

	display()
	{
		var pos=this.body.position;	
		push();
		translate(pos.x, pos.y);
		rotate(this.body.angle);
		imageMode(CENTER);
		image(this.image, 0,0,this.r*2.2, this.r*2.2);
		pop();
 }
}