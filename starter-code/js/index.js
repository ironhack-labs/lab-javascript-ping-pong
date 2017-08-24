
$( document ).ready(function() {
  var keys = {};
  var raqueta = new Paddle();

   setInterval(checkControls, 30);

    $(document).keydown(function(e){
     keys[e.keyCode] = true;
      }).keyup(function(e){
      delete keys[e.keyCode];
    });

    function checkControls(){
      console.log("entro checkcontrol");
      if (keys[38])
        raqueta.moveUp();
      else if (keys[40])
        raqueta.moveDown();
    }

    raqueta.moveDown();
    raqueta.moveUp();

// pelota
//
//
    var pelota = new Ball();

pelota.arribaIzquierda();


});
















// var board = new Board();
//

// $( document ).ready(function() {
//   var keys = {};
//    setInterval(checkControls, 30);
//
//     $(document).keydown(function(e){
//      keys[e.keyCode] = true;
//       }).keyup(function(e){
//       delete keys[e.keyCode];
//         });
//   Paddle.checkControls();
//   Paddle.moveDown ();
//   Paddle.moveUp ();
//
//
// });






// $('#start').on('click', function(){
//   board.start();
//   activatePaddle2();
//   var game = setInterval(updateState, intervalTime);
//   renderGame();
// });
//
// function updateState(){
// }
//
// $(document).on('keydown', function(e){
// });
//
// function activatePaddle2() {
// }
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
