class Stone{
	constructor(x,y,r)
	{
		var options = {
			'density':4,
			'friction': 1.0,
			'restitution':0.5
		  };
		this.x=x;
		this.y=y;
		this.r=r
		this.body=Bodies.rectangle(x, y, 30, 30, options)
        this.width = 50;
        this.height = 50;

		World.add(world, this.body);

	}
	display()
	{
			var stonepos=this.body.position;		
			push()
			translate(stonepos.x, stonepos.y);
			rectMode(CENTER)
			strokeWeight(4);
			stroke("grey");
			fill("black");
		    rect(0, 0, this.width, this.height);
			pop()
	}

}