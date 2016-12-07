(function () {

	if (typeof PingPong === "undefined") {
    	window.PingPong = {};
  	}

	var Board = PingPong.Board = function (canvas, boardWidth, boardHeight) {
		this.boardWidth = boardWidth;
		this.boardHeight = boardHeight;
		// Canvas Tutorial: http://www.html5canvastutorials.com/
		canvas.width = this.boardWidth;
		canvas.height = this.boardHeight;
		this.context = canvas.getContext('2d');
		this.leftPaddle = new PingPong.Paddle(this.context, "left");
		this.rightPaddle = new PingPong.Paddle(this.context, "right");
		this.ball = new PingPong.Ball(this.context, this.leftPaddle, this.rightPaddle);
	};

	Board.prototype.scored = function () {
		return this.ball.onSideWall();
	};

	Board.prototype.play = function () {
		this.ball.move();
		this.leftPaddle.move();
		this.rightPaddle.move();			
		this.render();
	};

	Board.prototype.render = function () {
		this.context.clearRect(0 , 0, this.boardWidth, this.boardHeight);
		this.renderBackground();
		this.ball.render();
		this.leftPaddle.render();
		this.rightPaddle.render();
	};

	Board.prototype.renderBackground = function () {
		this.context.fillStyle = "black"; 
		this.context.fillRect(0, 0, this.boardWidth, this.boardHeight);
		this.context.beginPath();
      	this.context.moveTo(this.boardWidth / 2, 0);
      	this.context.lineTo(this.boardWidth / 2, this.boardHeight);
      	this.context.lineWidth = 5;
      	// Linedash http://www.rgraph.net/blog/2013/january/html5-canvas-dashed-lines.html
      	// Not supported by all browsers. Ask for a function that creats lines with a loop
      	this.context.setLineDash([5]);
      	this.context.strokeStyle = "#fff";
      	this.context.stroke();
      	this.renderScores();
	};

	Board.prototype.renderScores = function () {
		this.context.fillStyle = "white";
		this.context.font = "60px Tahoma";
		this.context.fillText(this.leftPaddle.points, this.boardWidth / 4 - 10, 70);
		this.context.fillText(this.rightPaddle.points, this.boardWidth / 4 * 3 - 10, 70);
	};

	Board.prototype.renderStart = function () {
		this.ball.startPosition();
		this.leftPaddle.setPosition();
		this.rightPaddle.setPosition();
		this.render();
	};

})();