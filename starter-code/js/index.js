// var board = new Board();

// $('#start').on('click', function(){
//   board.start();
// //   activatePaddle2();
//   // var game = setInterval(updateState, intervalTime);
//   // renderGame();
// });

function updateState(){
}


//
// $(document).on('keyup', function(e){
// });

function activatePaddle2() {
}

function renderGame(){
}

function renderScore(){
}

function renderBall(){
}

function renderPaddle(){
}

var board = new Board();
var playCount = 0;

$(document).ready(function(){


  $('#start-button').click( function (e) {
      $('#start-button').toggle();
      if (playCount > 0) $('#game-over').toggle();
      board.resetScore();
      board.start();
      playCount += 1;

  });

  $(document).keydown(function(e) {

    switch(e.which) {
        case 40:
        board.playerPaddle.move('down');
        break;

        case 38:
        board.playerPaddle.move('up');
        break;

        default: return; // exit this handler for other keys
    }
    e.preventDefault(); // prevent the default action (scroll / move caret)
});


});
