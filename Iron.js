class Iron {
    constructor(x, y) {
      var iron_options = {
        'density':30,
        'friction': 3,
        'restitution':0.8
      }
      this.body = Bodies.rectangle(x, y, 50, 50, iron_options);
      this.width = 150;
      this.height = 100;
      World.add(world, this.body);
    }
    display(){
      var pos = this.body.position;     
  
      push();
      translate(pos.x, pos.y);
      strokeWeight(3);
      stroke('black');
      fill('brown');
      rectMode(CENTER);
      rect(0, 0, this.width, this.height);
      pop();
    }
  }
  