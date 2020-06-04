var mainCharacter;
var coin;
var gravity = 9.8/30.0;
var backgroundImage;
var mainCharacterImage;
var monsterImage;
var coinImage;
var groundOffset = 65
var monsterArray = []
var date = new Date();
var monsterpos=[];
var score = 0;
var started = 0;
var time = 0;
var starttime = new Date();

class Character {
  constructor(x, y, width, movespeed) {
    this.x = x;
    this.y = y;
    this.ySpeed = 0;
    this.xSpeed = 0;
    this.width = width;
    this.color = "blue";
    this.isMonster = false;
    this.movement = movespeed;
    this.HP = 3;
    this.delay = date.getTime()+500;
    this.flash = 0;
  }
  
  update(Monster, Xpos, Monsters){
	if(this.y+this.width*0.5 >= (height-groundOffset) && this.ySpeed > 0) 
    {
      this.ySpeed = this.ySpeed*(-0.4)
      this.y = height-this.width*0.5-groundOffset
    }
   
   if(!Monster)
   {
   date = new Date();
   for(let b=0; b<Monsters.length; b++)
   {
      if(Monsters[b][0]-60<=this.x && Monsters[b][0]+60>=this.x && Monsters[b][1]+60>=this.y && Monsters[b][1]-60<=this.y && date.getTime() > this.delay+1000)
       {
         this.HP--;
         this.delay= date.getTime();
       }
   }
    fill(0);
   if(this.HP>=3)
     {
     textSize(30);
     text('        ❤️', 10, 30);
     }
    if(this.HP<3)
       {
         
       textSize(30);
       text('        🤍', 10, 30);
       }
     if(this.HP>=2);
     {
     textSize(30)
     text('    ❤️', 10, 30);
     }
         if(this.HP<2)
       {
         
       textSize(30);
     text('    🤍', 10, 30);
       }
     if(this.HP>=1)
     {
     textSize(30)
     text('❤️', 10, 30);
     }
     else{setTimeout(reset,1000);this.HP=2000}
     
     
     if(this.HP>5){
     this.y=height+100;         
     textSize(30)
     text('🤍', 10, 30);
     text('    🤍', 10, 30);
     text('        🤍', 10, 30);}
     
     
     text('score:'+score+'/100', width-175, 30);
     if(score<100)
     {
     time = str(date.getTime() - starttime.getTime()).splice(time.length-4,0,'.')
     }
     
     text('time:'+time, width/2-50, 30);
     if(score>=100){
       textSize(100)
       text('YOU WON!!!', width/2-300, height/2)
     }
   }
    
   this.ySpeed += gravity;
   this.y += this.ySpeed;
    
   this.xSpeed *= 0.8
   this.x += this.xSpeed;
    
  if(Monster)
  {
    
  if(Xpos<this.x){this.xSpeed -= this.movement;}
  if(Xpos>this.x){this.xSpeed += this.movement;}
  return [this.x,this.y];
  }
  }
  
  draw(){
    if(this.isMonster){
      image(monsterImage, this.x, this.y, this.width, this.width)  
    } else {
      image(mainCharacterImage, this.x, this.y, this.width, this.width)
    }
  }
}

function setup() {
  createCanvas(800, 400);
  background(105, 105, 150);
  textSize(30)
  fill(0, 180, 0);
  text('GroundHogDay',320,200);
  textSize(25)
  fill(150, 150, 0);
  text('Collect 100 coins and win!',280,250);
  textSize(30)
  fill(255, 0, 0);
  text("Don't let time repeat itself!",250,300);
  fill(0, 0, 0);
  setTimeout(start,3000);
}

function draw() {
  if(started==1){
  background(0, 200, 150);
  image(backgroundImage, 0, 0, width, height)
  
  if(keyIsDown(LEFT_ARROW)){
    //move left
    mainCharacter.xSpeed -= 1.0
  }
  if(keyIsDown(RIGHT_ARROW)){
    //move left
    mainCharacter.xSpeed += 1.0
  }
  
  mainCharacter.update(false, false, monsterpos);
  mainCharacter.draw()
  monsterpos.length = 0;
  for(i = 0; i<monsterArray.length;i++){
  monsterpos.push(monsterArray[i].update(true, mainCharacter.x));
  monsterArray[i].draw()
  }
  coin.update(mainCharacter.x,mainCharacter.y);
  }
}

function keyPressed(){
   //&& mainCharacter.y >= 260
  if(key === " "){
    //JUMP!
    if(mainCharacter.y>300){
    mainCharacter.ySpeed -= 15.0
       }
  }
}
class Coin {
  constructor(){
  this.x = width/3;
  this.y = 35;
  }
update(playerX,playerY)
{
      if(playerX-60<=this.x && playerX+60>=this.x && playerY+60>=this.y && playerY-60<=this.y)
{
  score++;
this.x = Math.floor(Math.random() * width-60)+30;
}
image(coinImage, this.x, this.y, 60, 60);
}

}


function reset() {
  createCanvas(800, 400);
  mainCharacter = new Character(200, 200, 60, null)
  backgroundImage = loadImage("./BackGround.jfif")
  mainCharacterImage = loadImage("./GooglePhoto.jfif")
  monsterImage = loadImage("./ShutterStock.jpg")
  coinImage = loadImage("./coin.png")
  for(i = 0; i<3; i++){
  var newMonster = new Character(Math.floor(Math.random() * 801) , Math.floor(Math.random() * 201)+100 , 60, Math.random()/2.5 + 0.1)
  newMonster.isMonster = true
  monsterArray.push(newMonster)
  }
}
function start()
{
  mainCharacter = new Character(200, 200, 60, null)
  backgroundImage = loadImage("./BackGround.jfif")
  mainCharacterImage = loadImage("./GooglePhoto.jfif")
  monsterImage = loadImage("./ShutterStock.jpg")
  coinImage = loadImage("./coin.png")
  coin = new Coin();
  for(i = 0; i<3; i++){
  var newMonster = new Character(Math.floor(Math.random() * 801) , Math.floor(Math.random() * 201)+100 , 60, Math.random()/2.5 + 0.1)
  newMonster.isMonster = true
  monsterArray.push(newMonster)
  }
  starttime = new Date();
  started = 1;
}
    String.prototype.splice = function(start, delCount, newSubStr) {
        return this.slice(0, start) + newSubStr + this.slice(start + Math.abs(delCount));
    };

