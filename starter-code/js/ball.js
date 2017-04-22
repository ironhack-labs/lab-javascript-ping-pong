function Ball(x, y) {
    this.x = x;
    this.y = y;
    this.directionX = 0;
    this.directionY = 0;
    this.velocity = 5;
    this.deltaVX = 1;
    this.deltaVY = 1;
    
    this.newVelocityDeltas();
    this.randomDirection();
}

Ball.prototype.randomDirection = function() { 
    this.directionX = Math.floor(Math.random()*2) == 1 ? 1 : -1;
    this.directionY = Math.floor(Math.random()*2) == 1 ? 1 : -1;
};

Ball.prototype.newVelocityDeltas = function(){
    this.deltaVX = (Math.random() < 0.5) ? 1 : 4;
    this.deltaVY = (Math.random() < 0.5) ? 1 : 4;
};

Ball.prototype.move = function(){       
    this.x += (this.velocity+this.deltaVX) * this.directionX;
    this.y += (this.velocity+this.deltaVY) * this.directionY;
};
