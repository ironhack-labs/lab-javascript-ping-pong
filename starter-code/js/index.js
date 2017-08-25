var board = new Board();
var paddle1 = new Paddle();

$(document).ready(function() {
  $('#start').on('click', function() {
    board.start();
    activatePaddle2();
    var game = setInterval(checkControls, 30);
  });


  var keys = {};
  $(document).keydown(function(e) {
    keys[e.keyCode] = true;
  }).keyup(function(e) {
    delete keys[e.keyCode];
  });

  function checkControls() {
    console.log('hola')
    if (keys[38]){
      paddle1.moveup();
    }
    else if (keys[40]){
      paddle1.movedown();
    }
  }
});


function updateState() {}




function activatePaddle2() {}
