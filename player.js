class Player{
    constructor(x, y, width, height) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
      }
      display(){
        push();
        translate(this.body.position.x, this.body.position.y);
        fill("brown");
          if (keyDown(RIGHT_ARROW)) {
            Matter.Body.applyForce(this.body, {x:-20, y:0}, 5 );
          }
          if (keyDown(LEFT_ARROW)) {
            Matter.Body.applyForce(this.body, {x:20, y:0}, 5 );
          }
          if (keyIsDown(UP_ARROW)) {
            Matter.Body.applyForce(this.body, {x:0, y:20}, 5 );
          }
        rectMode(CENTER);
        rect(0,0,this.width,this.height);
        pop();
      }
}