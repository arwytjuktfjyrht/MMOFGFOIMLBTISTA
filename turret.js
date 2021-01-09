class Turret{
    constructor(x, y, width, height) {
        var options = {
          isStatic:true
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
      }
      display(){
        push();
        Matter.Body.rotate(this.body, 5);
        translate(this.body.position.x, this.body.position.y);
        fill("brown");
        rotate(this.body.angle);
        line(0,0,0,-4000);
        rectMode(CENTER);
        rect(0,0,this.width,this.height);
        pop();
      }
}