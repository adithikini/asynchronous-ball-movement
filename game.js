class Game{
constructor(){

}
GetgameState(){
    var gamestateref=database.ref("gameState")
    gamestateref.on("value",function(data){
       gamestate=data.val() 
    })
}
updategameState(state){
    var updateref=database.ref("/")
    updateref.update({
        gameState:state
    })

}
start(){
   if(gamestate===0){
       player=new Player();
       player.Getplayercount();
       form=new Form();
       form.display();

   } 
   car1=createSprite(100,160)
   car1.addImage(car1image)

   car2=createSprite(200,240)
   car2.addImage(car2image)
   carsarray=[car1,car2]
}
play(){
    image(trackimage,0,-displayHeight*4,displayWidth,displayHeight*5)
    text("the game has begun",120,100)
    player.getCarsatEnd();
    Player.getallplayerinfo()
    if(allplayers!=undefined){
    var y =100;
    var x =180;
    var index=0
        
    for(var plr in allplayers){
        if(plr==="player"+ player.index){
            //carsarray[index].shapeColor="red"
            camera.position.x=displayWidth/2
            camera.position.y=displayHeight-allplayers[plr].playerdistance
            fill("red")
            ellipse(carsarray[index].x,carsarray[index].y,60,60)
        }
        else{
            carsarray[index].x=x
            carsarray[index].y=displayHeight-allplayers[plr].playersdistance
        }

           carsarray[index].x=x
           carsarray[index].y=displayHeight-allplayers[plr].playerdistance


       // text(allplayers[plr].playername+":"+allplayers[plr].playerdistance,100,y)
        x=x+130;
        index=index+1;
        }
    }
   if(keyIsDown(UP_ARROW)&& player.index!=null){
       player.distance=player.distance+20
       player.updateplayerinfo()

   }
   if(player.distance===3860){
       gamestate=2
       player.rank=player.rank+1
       Player.updatecarsatend(player.rank)
       console.log(player.distance)
   }
 drawSprites()  
}
end(){
    console.log("gameover")
    console.log("Player Name :"+ player.name);
    console.log("Player Rank : "+ player.rank)
    game.updategameState(2)
}




}







