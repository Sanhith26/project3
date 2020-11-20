class Dustbin {


    contructor(x,y,width,height){
        
    var options={
    isStatic:true
    this.image = loadImage("sprites/dustbingreen.png");

    

    }
    
    this.body=Bodies.rectangle(x,y,width,height,options)
    this.width=width
    this.height=height
    World.add(world,this.body)
    }
    function display(){
        var pos = this.body.position
        fill("purple")
        rectMode(CENTER)
       rect(pos.x,pos.y,this.width,this.height)
    }
    }
    