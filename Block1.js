class Block1{
    constructor(x, y, width, height) {
        var options = {
            'restitution':1,
            'friction':0,
            'density':1.0
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
      }
      display(){
        push();
        //translate(this.body.position.x, this.body.position.y);
        var pos =this.body.position;
        rectMode(CENTER);
        fill("green");
        rect(pos.x, pos.y, this.width, this.height);
        
        pop();
      }
  }