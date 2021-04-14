class Form{
    constructor(){
        this.title=createElement("h1")
        this.inputbox=createInput("name")
        this.submitbutton=createButton("enter")
        this.greeting=createElement("h3")
        this.resetbutton=createButton("reset")
    }
    display(){
       
       this.title.html("game form") 
       this.title.position(130,0)
       
      
       this.inputbox.position(100,180)

       
      this.submitbutton.position(100,200)
      this.resetbutton.position(displayWidth-100,20)
       
       this.resetbutton.mousePressed(()=>{
           game.updategameState(0)
           player.updateplayerCount(0)
       })
       this.submitbutton.mousePressed(()=>{
           this.inputbox.hide()
           this.submitbutton.hide()
           this.title.hide()

            player.name= this.inputbox.value()
           playercount=playercount+1
           player.index=playercount
           player.updateplayerCount(playercount)
           player.updateplayerinfo()


          this.greeting.html("hello!youll join the soon as the other player joins in...")
          this.greeting.position(200,170)
       })
        }
     hide(){
         this.title.hide()
         this.inputbox.hide()
         this.submitbutton.hide()
         this.greeting.hide()
     }   
}