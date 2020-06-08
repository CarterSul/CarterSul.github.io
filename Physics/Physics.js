class Physics
{
  constructor(posX,posY,size)
  {
    this.x=posX;
    this.y=posY;
    this.gravity=0.4;
    this.ySpeed=0;
    this.xSpeed=0;
    this.size=size/2;
    this.collides=[];
    this.xTest=0;
    this.xInRange=false;
  }
  update(objectPosList,me)
  {
    //finds highest object with same X-------------------
    this.collides=[];
    for(let i = 0; i < objectPosList.length; i++)
    {
      this.xTest=0;
      this.xInRange=false;
      let object=objectPosList[i];
      
      //Cords================================
      for(let b = 0; b<object.length; b++)
      {
        let cord=object[b];
        if(this.xTest==1 && cord[0]>=this.x)
        {
           this.xInRange=true;
           this.xTest=3;
        }
        else if(this.xTest==2 && cord[0]<=this.x)
        {
           this.xInRange=true;
           this.xTest=3;
        }
        else if(cord[0]<=this.x && this.xTest!=3)
        {
           this.xTest=1;
        } 
        else if(cord[0]>=this.x && this.xTest!=3)
        {
           this.xTest=2;
        } 
      }
      
      if(this.xInRange)
      {
         this.collides.push(object);
      }
    }
    //updates y position-----------------------
    this.x+=this.xSpeed;
    this.y+=this.ySpeed;
    this.ySpeed += this.gravity;
    //slopes-----------------------------------
    for(let e = 0; e < this.collides.length; e++)
    {
        let object=this.collides[e];
        if(isInside(
                    object[0][0],object[0][1],
                    object[1][0],object[1][1],
                    object[2][0],object[2][1],
                    this.x,this.y
                   )
          )
        {
            //finds highest point in triangle
            let highestY=99999999999;
            let highestX=0;
            let leftpoint = [];
            let rightpoint = [];
            for(let r = 0; r <= 2; r++)
            {
              //watch for bugs here
                let point=object[r];
                
                if(point[1]<highestY)
                {
                    highestX=point[0];
                    highestY=point[1];
                }console.log(highestX,this.x)
            }
            for(let f = 0; f <= 2; f++)
            {
              //watch for bugs here
                let point=object[f];
                
                if(point[0]>highestX)
                {
                    rightpoint.push(point[0]);
                    rightpoint.push(point[1]);
                }
              
            }
            for(let t = 0; t <= 2; t++)
            {
              //watch for bugs here
                let point=object[t];
                
                if(point[0]<highestX)
                {
                    leftpoint.push(point[0]);
                    leftpoint.push(point[1]);
                }
              
            }
            if(this.x<=highestX)
            {
                this.xSpeed-=leftpoint[1]/highestX;
                this.y-=this.ySpeed-this.gravity;
                this.ySpeed=(leftpoint[0]/highestY);
            }
            else if(this.x>highestX)
            {
                this.xSpeed+=highestX/rightpoint[1];
                this.y-=this.ySpeed-this.gravity;
                this.ySpeed=(rightpoint[0]/highestY);
            }
        }
        else if(object[3]!=null)
        {
    
        }
    }

    //falling---------------------------------
    if(this.y>=height-10)
    {
      this.y-=this.ySpeed;
      this.ySpeed=0;
    }
    this.xSpeed = this.xSpeed/1.03;
    
    
    fill(0,125,0)
    ellipse(this.x,this.y,this.size*2,this.size*2);
  }
}


/* A utility function to calculate area of triangle formed by (x1, y1), 
(x2, y2) and (x3, y3) */
function area(x1, y1, x2, y2, x3, y3) 
{ 
return abs((x1*(y2-y3) + x2*(y3-y1)+ x3*(y1-y2))/2.0); 
} 



/* A function to check whether point P(x, y) lies inside the triangle formed 
by A(x1, y1), B(x2, y2) and C(x3, y3) */
function isInside( x1, y1, x2, y2, x3, y3, x, y) 
{ 
/* Calculate area of triangle ABC */
let A = area (x1, y1, x2, y2, x3, y3); 

/* Calculate area of triangle PBC */
let A1 = area (x, y, x2, y2, x3, y3); 

/* Calculate area of triangle PAC */
let A2 = area (x1, y1, x, y, x3, y3); 

/* Calculate area of triangle PAB */	
let A3 = area (x1, y1, x2, y2, x, y); 
	
/* Check if sum of A1, A2 and A3 is same as A */
return (A == A1 + A2 + A3); 
} 

