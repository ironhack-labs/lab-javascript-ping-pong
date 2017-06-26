var board = new Board();
var ball = new Ball();

$('#start').on('click', function(){
  board.start();
  activatePaddle2();
  console.log("Hola");
  //setInterval(function(){
  ball.move();
  //});
  //setInterval(ball.move(), 100); // Al llamar a variable pierde la funcionalidad
  //ball.move();
  //var game = setInterval(updateState, intervalTime);
  renderGame();
});

function updateState(){
}

function activatePaddle2() {
  $(document).on('keydown', function(e){
    var z = $("#paddle2").position().top;
    console.log($("#paddle2").position());

    if(event.keyCode === 38){
      if(z <= 0){
        return;
      }
      $("#paddle2").css({top: z-=13});
    }else if(event.keyCode === 40){
      if(z >= 340){
        return;
      }
      $("#paddle2").css({top: z+=13});
    }
  });
}

function renderGame(){
}

function renderScore(){
}

function renderBall(){
}

function renderPaddle(){
}
