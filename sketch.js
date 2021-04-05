var canvas, backgroundImage;

var gameState = 0;
var playerCount = 0;
var database;

var form, player, game;

var allPlayers ; 

var ans ;
var a1;


function setup(){
  canvas = createCanvas(displayWidth-50,displayHeight-100);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();

  // player.updateCount(0);
  // game.update(0);
  // Player.name = aaaa1;
  // Player.answer = 0 ;


}


function draw(){
  if(playerCount === 2){
    clear();
    game.update(1);
   // form.hide();
    
  }

  if(gameState===1){
    a1 = new Question(); 
    a1.display();   
  }

  if(gameState===2){
    clear();
  //  a1.hide();
    game.end();
  }
}
