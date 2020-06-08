class Rigidbody
{
  constructor(posX1,posY1,posX2,posY2,posX3,posY3,color)
  {
    this.x1=posX1;
    this.y1=posY1;
    this.x2=posX2;
    this.y2=posY2;
    this.x3=posX3;
    this.y3=posY3;
    //this.width=width;
    //this.height=height;
    this.color=color;
  }
  //draws cube
  update(){
  fill(this.color);
  triangle(this.x1,this.y1,this.x2,this.y2,this.x3,this.y3);
  return[[this.x1,this.y1],[this.x2,this.y2],[this.x3,this.y3]];
  //rect(this.x, this.y, this.width, this.height);
  //finds corners of cube
  /*return[[this.x,this.y],
         [this.x+this.width,this.y],
         [this.x,this.y+this.height],
         [this.x+this.width,this.y+this.height]];*/
  }
}
