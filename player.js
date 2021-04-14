class Player{
    constructor(){
       this.name=null;
       this.distance=0;
       this.index=null;
       this.rank=0;
    }
    Getplayercount(){
       var playercountref=database.ref("playerCount")
       playercountref.on("value",function(data){
           playercount=data.val()
       })
    }
    updateplayerCount(count){
        var playercountref=database.ref("/")
        playercountref.update({
            playerCount:count
        })
    }

    getCarsatEnd(){
        var carsatendref=database.ref("carsatend")
        carsatendref.on("value",(data)=>{
            this.rank=data.val()
        })  
    }

    static updatecarsatend(rank){
        var carsatendref=database.ref("/");
        carsatendref.update({
            carsatend : rank
        })
    }

    updateplayerinfo(){
       var playerindex="players/player"+this.index;
       var playerref=database.ref(playerindex);
       playerref.set({
       playername:this.name,
       playerdistance:this.distance
       })
    }
   static getallplayerinfo(){
        var playersref=database.ref("players")
        playersref.on("value",function(data){
            allplayers=data.val()
        })
    }
}