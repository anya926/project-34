//Create variables here
var dog;
var dogImg1, dogImg2;
var foodStock, foodS;

function preload()
{
  //load images here
  dogImg1 = loadImage("images/dogImg.png");
  dogImg2 = loadImage("images/dogImg1.png");
}

function setup() {
	createCanvas(500, 500);
  dog = createSprite(250,250,60,60);
  dog.addImage(dogImg1);
  dog.scale = 0.2;

  database = firebase.database();
  foodStock = database.ref("food");
  foodStock.on("value", readStock);
}


function draw() {  
  background(46,139,87);
  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(dogImg2);
    if(foodS===0){
      foodS=0;
    }
    else{
      foodS = foodS-1;
    }
  }
  if(keyWentUp(UP_ARROW)){
    dog.addImage(dogImg1);
  }
  drawSprites();
  textSize(15);
  fill(0);
  stroke(0);
  text("Foodstock: "+ foodS, 170,100);
  //add styles here

}

function readStock(data){
  foodS = data.val();
}

function writeStock(x){
  database.ref('/').update({
    foodS: x
  })
}



