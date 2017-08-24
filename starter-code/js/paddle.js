function Paddle(x,y) {
  this.minTop = 10;
  var alturaTablero = parseInt($("#board").css('height'));
  var alturaRaqueta = parseInt($(".paddle").css('height'));
  this.maximillo = alturaTablero - alturaRaqueta ;

}
// Paddle.prototype.restart = function(){
// };
//
// Paddle.prototype.hitBall = function(ball_y){
// };
//
// Paddle.prototype.moveDown = function(){
//   console.log("down");
//      var b = parseInt($("#paddle1").css('top'));
//      b +=8;
//      $("#paddle1").css('top', b +'px');
//    };
//
// Paddle.prototype.moveUp = function(){
//   console.log("up");
//      var a = parseInt($("#paddle1").css('top'));
//     a -=8;
//     $("#paddle1").css('top', a +'px');
// };
//
// Paddle.prototype.checkControls = function(){
//   console.log("entro checkcontrol");
//       if (keys[40])
//         moveDown();
//       else if (keys[38])
//         moveUp();
//       };



Paddle.prototype.moveDown=function(){

  var maximTop = this.maximillo;
  var b = parseInt($("#paddle1").css('top'));


  if (b<maximTop){
      console.log("down");
      b +=8;
      $("#paddle1").css('top', b +'px');}};

Paddle.prototype.moveUp=function(){
var a = parseInt($("#paddle1").css('top'));
var x = this.minTop;

  if(a>x){
    console.log("up");
    a -=8;
    $("#paddle1").css('top', a +'px');
}
};
