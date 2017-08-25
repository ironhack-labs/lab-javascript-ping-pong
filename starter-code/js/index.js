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
  var keys = {}
  setInterval(checkControl, 30)

  $('#start').on('click', function() {
    var ball = new Ball(100, 100)
    var upperLim = 10
    var downLim = 545
    y = $('#ball').css('top', ball.posY)
    x = $('#ball').css('left', ball.posX)
    setInterval(function () {
      if (downLim >= ball.posY) {
        ball.posX += 8
        ball.posY += 8
        console.log('Mov derecha abajo - x:' + ball.posX + ', y:' + ball.posY)
        $('#ball').css('left', ball.posX)
        $('#ball').css('top', ball.posY)
      } else if(upperLim <= ball.posX){
        ball.posX -= 8
        ball.posY += 8
        console.log('Mov derecha arriba - x:' + ball.posX + ', y:' + ball.posY)
        $('#ball').css('left', ball.posX)
        $('#ball').css('top', ball.posY)
      }
    }, 50)
  })

  $(document).keydown(function(e) {
    keys[e.keyCode] = true;
  }).keyup(function(e) {
    delete keys[e.keyCode];
  })

  function checkControl() {
    var x
    if (keys[38])
      x = paddle.moveUp(parseInt($('#paddle1').css('top')))
    else if (keys[40])
      x = paddle.moveDown(parseInt($('#paddle1').css('top')))

    $('#paddle1').css('top', x + 'px')
  }
})
