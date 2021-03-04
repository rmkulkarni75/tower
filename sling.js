class sling{
    constructor(bodyA,pointB){
        var options={
            bodyA:bodyA,
            pointB:pointB,
            stiffness:0.04,
            length:1

        }
       this.sling1=Constraint.create(options)
       this.pointB=pointB
        
        World.add(world,this.sling1)
    }
    attach(body){
        this.sling1.bodyA=body
    }
    fly()   {
        this.sling1.bodyA=null
    }
    display(){
        if(this.sling1.bodyA){
            var pointA=this.sling1.bodyA.position
            var pointB=this.pointB
            strokeWeight(5)
            stroke("red")
            line(pointA.x,pointA.y,pointB.x,pointB.y)

        }
     
    }
}