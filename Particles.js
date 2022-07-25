class Particles{
    constructor(x,y=10,r=10){
        var options = {
            'restitution': 0.35,
            'density': 0.6,
    }
    this.body = Bodies.circle(x,y,r,options);
    this.radius = r;
    this.color = color(random(0,255), random(0,255),random(0,255));
    World.add(world,this.body);
}
display(){
    push();
    translate(this.body.position.x, this.body.position.y)
    rotate(this.body.angle)
    fill(this.color)
    ellipseMode(RADIUS)
    ellipse(0, 0, this.radius, this.radius);
    pop();
}
}
    
    