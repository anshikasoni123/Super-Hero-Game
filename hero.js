class Hero {
    constructor(x,y,radius)
      {
          var options = {density: 1, frictionAir: 1}
          
          this.body=Bodies.circle(x, y, (radius)/2, options);
          this.radius = radius;
          this.image=loadImage("images/Superhero-01.png");
          World.add(world, this.body);
  
      }
      
      display()
      {
              
              var pos=this.body.position;		
              push()
              translate(pos.x, pos.y-100);
              rectMode(CENTER)
              imageMode(CENTER);
              image(this.image, 0, 0, this.radius + 150, this.radius)
              pop()
              
      }
  }