function Ball(x,y, paddle1, paddle2) {
  this.x=x;
  this.y=y;
  this.paddle1=paddle1;
  this.paddle2=paddle2;
}

Ball.prototype.randomDirection = function() {

};

Ball.prototype.move = function(){
  var ballon = document.getElement("ball");

};

Ball.prototype.pointScored = function(){
};

// returns winner paddle or false
Ball.prototype.winner = function(){
};

Ball.prototype.restart = function(){
};

function GetChar (event){
            var chCode = ('charCode' in event) ? event.charCode : event.keyCode;

            switch (chCode) {
              case 119:
                  $("#paddle1").css('margin-top', '-=10px');
                break;
              case 115:
                $("#paddle1").css('margin-top', '+=10px');
                break;
              default:
              }


        }

$(document).ready = function() {



};
