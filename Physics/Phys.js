
  
let rigidbodys=[];
let physicsObjs=[];
let objectPos=[];

function setup() 
{
  createCanvas(400, 400);
  rigidbodys.push(new Rigidbody(Math.floor(Math.random() * 115)+135,80,80,100,300,300,0));
  rigidbodys.push(new Rigidbody(355,300,80+50,200,250,300,100));
  rigidbodys.push(new Rigidbody(450,360,80+50,400,400,400,[255,0,0]));
  physicsObjs.push(new Physics(200,40,10));
  physicsObjs.push(new Physics(205,20,5));
}

function draw() 
{
  //setup for next loop
  objectPos=[];
  background(220);
  
  //runs rigidbodys
  for (let q = 0; q<rigidbodys.length; q++)
  {
    rigidbody=rigidbodys[q];
    objectPos.push(rigidbody.update());
  }
  //runs Physics objects
  for (let w = 0; w<physicsObjs.length; w++)
  {
    physicsObj=physicsObjs[w];
    physicsObj.update(objectPos,1);
    //objectPos.push(rigidbody.update());
  }
}
