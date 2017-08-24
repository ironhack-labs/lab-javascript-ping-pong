// var board = new Board()
// $('#start').on('click', function(){
//   board.start()
//   activatePaddle2()
//   var game = setInterval(updateState, intervalTime);
//   renderGame()})
// function updateState(){}
// $(document).on('keydown', function(e){})
// function activatePaddle2() {}
// function renderGame(){}
// function renderScore(){}
// function renderBall(){}
// function renderPaddle(){}


$(document).ready(function() {
  var paddle = new Paddle()
  var ball = new Ball()
  var keys = {}
  setInterval(checkControl, 30)
  setInterval(movPelota, 50)

  $(document).keydown(function(e) {
    keys[e.keyCode] = true;
  }).keyup(function(e) {
    delete keys[e.keyCode];
  })

  function checkControl() {
    var x
    if (keys[81])
      x = paddle.moveUp(parseInt($('#paddle1').css('top')))
    else if (keys[65])
      x = paddle.moveDown(parseInt($('#paddle1').css('top')))

    $('#paddle1').css('top', x + 'px')
  }

  function movPelota () {
    if($('board').css('top', 440)){
      ball.abajoDerecha()
    }
  }
})
