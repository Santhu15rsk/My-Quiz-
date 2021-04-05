class Form {
  constructor() {
    this.input = createInput("name");
    this.button = createButton("play");
    this.greeting = createElement("h2");
    this.reset = createButton("reset");

  }
  hide(){
    this.greeting.hide();
    this.button.hide();
    this.input.hide();
  }

  display(){
    var title = createElement('h2')
    title.html("QUIZ");
    title.position(displayWidth/2 , displayHeight/2 - 400);
    
    this.input.position(displayWidth/2 - 50 , displayHeight/2 - 300);
    this.button.position(displayWidth/2 + 120, displayHeight/2 - 300);

    this.reset.position(900, 660);
        this.reset.style('width', '100px');
        this.reset.style('height', '30px');
        this.reset.style('background', 'lightpink');
        
    this.button.mousePressed(() =>{
      this.input.hide();
     this.button.hide();

     player.name = this.input.value();
      
      playerCount+=1;
      player.index = playerCount;
      player.update();
      player.updateCount(playerCount);
      this.greeting.html("players joined :" + playerCount  );
      this.greeting.position(displayWidth/2  , displayHeight/2 - 300);
    });

    this.reset.mousePressed(() => {
      player.updateCount(0);
      game.update(0);
      database.ref('/').update({
          players:null 
        })
      //add code to reset the values of the gameState and the playerCount nodes to 0 in the database
  });

  }
}
