class Block{
  constructor(x, y, width, height) {
      var options = {
          restitution :0.4,
          friction :0.0,
      }
      this.image = loadImage("block.png");
      this.visibility = 255
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
     console.log(this.body.speed); 
      var pos= this.body.position;
      rectMode(CENTER);
      if(this.body.speed<3){
      image(this.image,pos.x,pos.y,this.width,this.height);
    }

    else{
    World.remove(world,this.body)  
    push();
    tint(255,this.visibility)
    this.visibility = this.visibility-5
    image(this.image,pos.x,pos.y,this.width,this.height);
    pop();
    }

     // rect(pos.x,pos.y,this.width, this.height);
    }
}