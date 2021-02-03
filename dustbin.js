class Bin {
    constructor(x,y){
        var options = {
        restitution : 0.3 ,
        isStatic : false,
        density : 1.2,
        friction : 0.5  
        }
        this.image = loadImage("dustbingreen.png")
        this.body = Bodies.rectangle(x , y , 20,20, options)
        World.add(world,this.body)
    }
   display () {
     push()
     translate(this.body.position.x , this.body.position.y )
     
    imageMode(CENTER)
    image(this.image , 0 , -65 , 220 , 200 )
   
   pop()
   }
}