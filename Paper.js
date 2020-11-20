class Paper {


contructor(x,y,radius){
    
var options={
isStatic:false
restitution:0.3,
friction:0.5,
density:1.2
this.image = loadImage("sprites/paper.png");

}

this.body=Bodies.circle(x,y,radius,options)
this.radius=radius
World.add(world,this.body)
}
function display(){
    var pos = this.body.position
    push();
    translate(pos.x,pos.y)
    fill("blue")
    elipseMode(CENTER)
    elipse(0,0,this.radius*2,this.radius*2)
}
}
