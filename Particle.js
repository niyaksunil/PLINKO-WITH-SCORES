// created the Particle class
class Particle {
    constructor(x, y,r) {
        var options ={
            restitution:0.4
        }

// created the circle body 
        this.r=r;
        this.body = Bodies.circle(x, y, this.r,options);   
        
// created the body with random colours
        this.color=color(random(0, 255), random(0, 255), random(0, 255));
        World.add(world, this.body);

    }

// displying the function
    display() {

        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        noStroke();
        fill(this.color)
        ellipseMode(RADIUS);
        ellipse(0, 0, this.r,this.r);
        pop();
    }

};