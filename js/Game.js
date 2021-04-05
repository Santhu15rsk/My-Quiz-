class Game {
  constructor(){}
  
  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })
   
  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

 

  async start(){
    if(gameState === 0){
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");
      if(playerCountRef.exists()){
      playerCount = playerCountRef.val();
      player.getCount();
      }

      form = new Form()
      // a1 = new Question();
      // a1.hide();
      form.display();
    }

    
}


  end(){
    a1.hide();
    textSize(30);
    text("GAME OVER" , displayWidth/2 - 50 , displayHeight/2 - 300);
  //   Player.getPlayerInfo();
  //   if(allPlayers !== undefined){
  //     var display_position = 130;
  //     for(var plr in allPlayers){
        
  //       if(plr === "player" + player.index)
  //       fill("red")
  //     else
  //     fill("black")
  //     display_position += 20;
  //     textSize(15);
  //     text(allPlayers[plr].name+" :" + allPlayers[plr].distance , displayWidth /2-10 , display_position);
  //   }

  // }

}


}

