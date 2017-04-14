$(document).ready(function(){
  $("#end-play").hide();
  var board = new Board();
  var x1 = getPosition("#paddle1", "left");
  var y1 = getPosition("#paddle1", "top");
  var userPaddle = new Paddle(x1,y1);
  var x2 = getPosition("#paddle2", "left");
  var y2 = getPosition("#paddle2", "top");
  var computerPaddle = new Paddle(x2,y2);
  var xCenter = getPosition("#ball", "left");
  var yCenter = getPosition("#ball", "top");
  var ball = new Ball(xCenter,yCenter);
  //activatePaddle2();


  $('#start').on('click', function(){
    var dir1=ball.randomDirection();
    var sumX = 0;
    var sumY = 4;
    if (dir1 === "left") sumX = -10;
    else sumX = 10;
    //board.start(ball, sumX, sumY);
    activatePaddle2();
    //var game = setInterval(updateState, intervalTime);
    //renderGame();
    var peloticaMoviendose = setInterval(function () {
      ball.move(sumX, sumY);
      if(ball.y<=50) sumY=4;
      else if(ball.y>=630) sumY=-4;
      if(ball.x<=75){ //sumX=10;
        if(ball.x<=60){
          board.compScore++;
          $(".right span").html(board.compScore);
          board.restart(userPaddle, computerPaddle, ball);
          if(board.compScore === 10){
            board.gameOver();
            clearInterval(peloticaMoviendose);
          }
          clearInterval(peloticaMoviendose);
        }
        sumX = userPaddle.hitBall(ball.y, userPaddle.y, sumX);
      } else if(ball.x>=1020){ //sumX=-10;
          if(ball.x>=1035){
            board.userScore++;
            $(".left span").html(board.userScore);
            board.restart(userPaddle, computerPaddle, ball);
            if(board.userScore === 10) {
              board.win();
              clearInterval(peloticaMoviendose);
            }
            clearInterval(peloticaMoviendose);
          }
        sumX = computerPaddle.hitBall(ball.y, computerPaddle.y, sumX);
      }

    }, 40);

  });


  function moveListeners (event) {
    var keys = [38, 40];
    if (keys.indexOf(event.keyCode) < 0)
      return;
    switch (event.keyCode) {
      case 38: move("up"); break;
      case 40: move("down"); break;
    }
  }

  document.addEventListener("keydown", moveListeners);

  function move (direction) {
    switch (direction) {
      case "up":
        if(userPaddle.y === 50) break;
        var sube = (userPaddle.moveUp()+"px");
        $("#paddle1").css("top", sube);
        break;
      case "down":
        if(userPaddle.y === 590) break;
        var baja = (userPaddle.moveDown()+"px");
        $("#paddle1").css("top", baja);
        break;
    }
  }

  function activatePaddle2() {
    var paddle2Moviendose = setInterval(function () {
      var nuevaPos = ball.y - 25;
      if(nuevaPos<=50){
        computerPaddle.y=50;
        nuevaPos=50;
      } else if(ball.y>=614){
        computerPaddle.y=590;
        nuevaPos=590;
      } else{
        computerPaddle.y = nuevaPos;
      }
      $("#paddle2").css("top", nuevaPos);
    }, 100);
  }

  function getPosition(id, where){
    return parseInt($(id).css(where).replace("px",""));
  }




  // $(document).on('keydown', function(e){
  // });




  // function updateState(){
  // }
  //
  //
  //
  //
  //
  // function renderGame(){
  // }
  //
  // function renderScore(){
  // }
  //
  // function renderBall(){
  // }
  //
  // function renderPaddle(){
  // }

});
