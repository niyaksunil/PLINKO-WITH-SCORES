// created the Divisions class
class Divisions{
    constructor(x, y, w, h) {
        var options = {
            isStatic: true
        }
 
// created the rectangle body
        this.body = Bodies.rectangle(x, y, w, h, options);
        this.w = w;
        this.h = h;
        World.add(world, this.body);

    }

// displaying the function
    display(){
        var pos = this.body.position;
        rectMode(CENTER);
        fill("white");
        rect(pos.x, pos.y, this.w, this.h);
    }

};