class Ball {
    constructor(x,y,r)
    {
        var options = 
        {
            restitution : 0.3 ,
            isStatic : false,
            density : 1.2,
            mass : 900,
            friction : 0.5  
        }
        
        this.r= r;
        this.x=x;
        this.y=y;
        this.image = loadImage("paper.png")
        this.body = Bodies.circle(this.x , this.y , (this.r-20)/2, options)
        //console.log(this.x);
        //console.log(this.y);
        World.add(world,this.body)
    }
   display () 
   {
//console.log(this.body.mass);
   var paperpos=this.body.position;	

   push()
			translate(this.body.position.x, this.body.position.y);
			imageMode(CENTER);
            image(this.image, 0,0,this.r,this.r)
	pop()
   }
}