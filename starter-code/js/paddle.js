function PaddleUser(x, y) {
  this.x = 0;
}
PaddleUser.prototype.restart = function() {
  this.x = 0;
};

PaddleUser.prototype.userMovement = function() {
  $(document).on('keydown', function() {
    this.x = $("#paddle-user").position().top;
    if (event.keyCode == 40 && this.x < 270) {
      $("#paddle-user").css({
        top: this.x += 20 //down//
      });
    } else if (event.keyCode == 38 && this.x > -350) {
      $("#paddle-user").css({
        top: this.x -= 20 //up//
      });
    }
  });
};
