class SlingShot{
    constructor(bodyA, pointB){
        var options ={
            bodyA: bodyA,
            pointB: pointB,
            stiffnes: 0.04,
            lenght: 10
        }
        this.pointB= pointB;
        this.Sling = Constraint.create(options);
        World.add(world,this.chain);
    }
    fly(){
        this.Sling.bodyA = null;
    }
    display(){
        var pointA = this.Sling.bodyA.position;
        var pointB = this.pointB;
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
    }
}