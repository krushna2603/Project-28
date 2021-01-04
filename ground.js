class ground {
    constructor(x,y,width,height) {
      var options = {
          isStatic: true
      }
      this.ground = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.ground);
    }
    display()
      {
        var groundPos=this.body.position;		
        push()
        translate(groundPos.x, groundPos.y);
        rectMode(CENTER)
        fill(128,128,128)
        rect(0,0,this.w, this.h);
        pop()
        
      }  
    }
  