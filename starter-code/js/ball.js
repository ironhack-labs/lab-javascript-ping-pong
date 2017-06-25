function Ball(x, y, paddle1, paddle2) {
  this.move();
  this.setInterval(move(), 500);

}

Ball.prototype.randomDirection = function() {};

Ball.prototype.move = function(x) {
  var i = 10000;
  var h = 10000;
  var m = 10;
  var p1x = $("#paddle1").position().left;
  var p1y = $("#paddle1").position().top;
  var p2x = $("#paddle2").position().left;
  var p2y = $("#paddle2").position().top;

  x = $("#ball").position().left;
  y = $("#ball").position().top;

  var a = 0;

  function k() {
    switch (a) {
      case 0:




        // x = $("#ball").position().left;
        // y = $("#ball").position().top;
        //console.log(x);
        x += m;
        y -= m;
        //console.log(x);
        $("#ball").css({
          left: x,
          top: y
        });
        //console.log($("#ball").position().left);
        if (true) {
          setTimeout(k, 20);
        }
        p2x = $("#paddle2").position().left;
        p2y = $("#paddle2").position().top;
        // x = $("#ball").position().left;
        if (y < 1 && a == 0) {
          a = 1;

        }
        if (x > 1470 && a == 0) {
          a = 3;

        }
        if (x > p2x - 10 && x < p2x + 1 && y > p2y && y < p2y + 150) {
          a = 3;
        }



        // } while (a==true);
        break;
      case 1:


        // x = $("#ball").position().left;
        // y = $("#ball").position().top;
        //console.log(x);
        x += m;
        y += m;
        //console.log(x);
        $("#ball").css({
          left: x,
          top: y
        });
        //console.log($("#ball").position().left);
        if (true) {
          setTimeout(k, 20);
        }
        p2x = $("#paddle2").position().left;
        p2y = $("#paddle2").position().top;


        if (x > 1470 && a == 1) {
          a = 2;

        }
        if (y > 810 && a == 1) {
          a = 0;

        }
        if (x > p2x - 10 && x < p2x + 1 && y > p2y && y < p2y + 150) {
          a = 2;
        }




        break;
      case 2:

        // x = $("#ball").position().left;
        // y = $("#ball").position().top;
        //console.log(x);
        x -= m;
        y += m;
        //console.log(x);
        $("#ball").css({
          left: x,
          top: y
        });
        //console.log($("#ball").position().left);
        if (true) {
          setTimeout(k, 20);
        }
        p1x = $("#paddle1").position().left;
        p1y = $("#paddle1").position().top;


        if (y > 810 && a == 2) {
          a = 3;

        }
        if (x < 1 && a == 2) {
          a = 1;

        }
        if (x > p1x + 25 && x < p1x + 35 && y > p1y && y < p1y + 150) {
          a = 1;
        }
        break;
      case 3:


        // x = $("#ball").position().left;
        // y = $("#ball").position().top;
        //console.log(x);
        x -= m;
        y -= m;
        //console.log(x);
        $("#ball").css({
          left: x,
          top: y
        });
        //console.log($("#ball").position().left);
        if (true) {
          setTimeout(k, 20);
        }
        p1x = $("#paddle1").position().left;
        p1y = $("#paddle1").position().top;
        x = $("#ball").position().left;
        // if (y == 0 && a==1) {
        //   a = 1;
        //
        // }
        if (x < 1 && a == 3) {
          a = 0;

        }
        if (y == 0 && a == 3) {
          a = 2;
        }
        if (x > p1x + 25 && x < p1x + 35 && y > p1y && y < p1y + 150) {
          a = 0;
        }

        // }
        // if (x==600 && a==3) {
        //   a=0;
        //
        // }
        break;







    }



  }



  k();
  // e();
};

Ball.prototype.pointScored = function() {};

// returns winner paddle or false
Ball.prototype.winner = function() {};

Ball.prototype.restart = function() {};
Ball.prototype.move();
