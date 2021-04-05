class Question{
    constructor(){
     this.input1 = createInput("enter your name here");
     this.input2 = createInput("enter correct option number");
    //  this.input.position(displayWidth - 1100 , displayHeight/2 + 20 );
   
     this.button = createButton("SUBMIT");
     this.question = createElement("h3");

     this.option1 = createElement("h5");
     this.option2 = createElement("h5");
     this.option3 = createElement("h5");
     this.option4 = createElement("h5");

    //  this.submit.position(displayWidth - 900 , displayHeight/2 + 20);
    }
  hide(){
      this.input1.hide();
      this.input2.hide()
      this.button.hide();
  }
    display(){
        textSize(30);

        this.input1.position(displayWidth - 1100 , displayHeight/2 + 20 );
        this.input2.position(displayWidth - 1100 , displayHeight/2 + 40 );

        // player.answer = this.input.value();
        
     this.button.position(displayWidth - 900 , displayHeight/2 + 20);

        text("QUESTION 1",displayWidth/2 - 50 , displayHeight/2 - 300);
        // var ques1 = createElement("h2");
        this.question.html("WHAT IS YOUR NAME");
        this.question.position(displayWidth - 1100 , displayHeight/2 - 300);
      
        // var option1 = createElement("h2");
        this.option1.html("a");
        this.option1.position(displayWidth - 1100 , displayHeight/2 - 200);
        // var submit1 = createButton('SUBMIT');
        // submit1.position(displayWidth - 900 , displayHeight/2 - 170)
      
        // var option2 = createElement("h2");
        this.option2.html("b");
        this.option2.position(displayWidth - 1100 , displayHeight/2 - 150);
        // var submit2 = createButton('SUBMIT');
        // submit2.position(displayWidth - 900 , displayHeight/2 - 120)
      
        // var option3 = createElement("h2");
        this.option3.html("c");
        this.option3.position(displayWidth - 1100 , displayHeight/2 - 100);
      
        // var option4 = createElement("h2");
        this.option4.html("d");
        this.option4.position(displayWidth - 1100 , displayHeight/2 - 50);
      
        this.button.mousePressed(()=>{
          this.input1.hide();
          this.input2.hide();
          this.button.hide();

          player.name = this.input1.value();
          // console.log("jdvdudhvdud");
          player.answer = this.input2.value();
          playerCount+=1;
          player.index = playerCount;
          player.update();
          player.updateCount(playerCount);
        });

        }
           
}