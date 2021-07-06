class Stone {
    constructor(x, y) {
      var stone_options = {
        'density':12,
        'friction': 0.9,
        'restitution':0.8
      }
      this.body = Bodies.rectangle(x, y, 50, 50, stone_options);
      this.width = 100;
      this.height = 100;
      World.add(world, this.body);
    }
    display(){
      var pos = this.body.position;     
  
      push();
      translate(pos.x, pos.y);
    
      strokeWeight(3);
      stroke('black');
      fill('red');
      rectMode(CENTER);
      rect(0, 0, this.width, this.height);
      pop();
    }
  }
  