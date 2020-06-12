class Game{
    constructor(){

    }
    getState(){
        var gameStateRef=database.ref('gameState');
        gameStateRef.on("value",function(data){
            gameState=data.val();
        })
   }
   update(state){
       database.ref('/').update({
           gameState:state
       })
   }
  async start(){
       if(gameState === 0){
           runner= new Runner();
           var runnerCountRef = await database.ref('runnerCount').once("value");
           if(runnerCountRef.exists()){
              runnerCount = runnerCountRef.val();
              runner.getCount();
           }
           form= new Form();
           form.display();
       }
    runner1 = createSprite(100,100);
    runner1.addImage("runner1", runner1I);
    runner1.scale = 0.5;
    runner2 = createSprite(100,300);
    runner2.addImage("runner2", runner2I);
    runner2.scale = 0.5;
    runner3 = createSprite(100,500);
    runner3.addImage("runner3", runner3I);
    runner3.scale = 0.5;
    runner4 = createSprite(100,700);
    runner4.addImage("runner4", runner4I);
    runner4.scale = 0.5;
    runners = [runner1, runner2, runner3, runner4];
   }
   play(){
    form.hide();

    Runner.getRunnerInfo();
    
    if(allRunners !== undefined){
      background("#c68767");
      image(track, 0, 0,12000, 700);
      
      var index = 0;

      var x;
      var y = 1;

      for(var runer in allRunners){

        index = index + 1 ;

        y = y + 119;

        x = displayWidth - allRunners[runer].distance;
        runners[index-1].x = x;
        runners[index-1].y = y;

        if (index === runner.index){
          runners[index - 1].shapeColor = "red";
          camera.position.x = runners[index-1].x
          camera.position.y = displayWidth/4;
        }
      }

    }

    if(keyIsDown(UP_ARROW) && runner.index !== null){
      runner.distance= runner.distance - 10;
      runner.update();
    }
    if(runner.distance<-10140){
      gameState = 2;
      game.end();
    }

    drawSprites();
  }
  end(){
     console.log("Game Ended");

     game.update(2);
  }
}