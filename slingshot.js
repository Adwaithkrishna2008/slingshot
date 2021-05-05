class Slingshot {

constructor(bodyA,bodyB){
var opt={
bodyA:bodyA,
bodyB:bodyB,
stiffness:0.30,
length:30
}

this.sling= Constraint.create(opt)
World.add(world,this.sling);

}
display(){
var pointA = this.sling.bodyA.position
var pointB = this.sling.bodyB.position

strokeWeight(3)
line(pointA.x,pointA.y,pointB.x,pointB.y);

}



}