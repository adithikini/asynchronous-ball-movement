

var database
var gamestate=0;
var playercount=0;
var game,player,form;
var car1,car2;
var trackimage
var carsarray=[];
var car1image,car2image
var allplayers



function preload(){
   car1image=loadImage("images/car1.png") 
   car2image=loadImage("images/car2.png")
   car3image=loadImage("images/car3.png")
   car4image=loadImage("images/car4.png")
   trackimage=loadImage("images/track.jpg")
}

function setup(){
    createCanvas(displayWidth-20,displayHeight-30);
    database=firebase.database();
    game=new Game()
    game.GetgameState()
    game.start()
    

}
function draw(){
    if(playercount===2){
        game.updategameState(1)

    }
    if(gamestate===1){
        clear()
        game.play()
    }
    if(gamestate===2){
        game.end()
    }

}