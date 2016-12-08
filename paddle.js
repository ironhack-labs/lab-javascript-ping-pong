(function () {

	if (typeof PingPong === "undefined") {
    	window.PingPong = {};
  	}

	var Paddle = PingPong.Paddle = function (context, side) {
		this.height = 100;
		this.width = 20;
		this.points = 0;
		this.position = [];
		this.direction = [0, 0];
		this.side = side;
		this.context = context;
		this.movements = {
			"right": {
				111: [0, -2],
				108: [0, 2],
			},
			"left": {
				119: [0, -2],
				115: [0, 2],
			}
		};
		this.setPosition();
		this.setListeners();
	};

	Paddle.prototype.bottomWall = function () {
		return (this.position[1] + this.height) >= this.context.canvas.height;
	};

	Paddle.prototype.move = function (event) {
		this.position[0] += this.direction[0];
		this.position[1] += this.direction[1];
		if (this.position[1] < 0) {
			this.position[1] = 0;
		} else if (this.position[1] + this.height > this.context.canvas.height) {
			this.position[1] = this.context.canvas.height - this.height;
		}
	};

	Paddle.prototype.moveUp = function () {
		this.position[1] -= 10;
	};

	Paddle.prototype.moveDown = function () {
		this.position[1] += 10;
	};

	Paddle.prototype.render = function () {
		this.context.beginPath();
		this.context.rect(this.position[0], this.position[1], this.width, this.height);
		this.context.fillStyle = '#fff';
		this.context.fill();
	};

	Paddle.prototype.scores = function () {
		this.points += 1;
	};

	Paddle.prototype.setDirection = function (event) {
		var keyPressed = event.keyCode;
		if (this.movements[this.side][keyPressed]) {
			this.direction = this.movements[this.side][keyPressed];
		}
	};

	Paddle.prototype.setListeners = function () {
		window.addEventListener("keypress", this.setDirection.bind(this));
		window.addEventListener("keyup", this.stopPaddle.bind(this));
	};

	Paddle.prototype.setPosition = function () {
		this.position[1] = (this.context.canvas.height / 2) - (this.height / 2);
		if (this.side === "left") {
			this.position[0] = 20;
		} else {
			this.position[0] = this.context.canvas.width - 40;
		}
	};

	Paddle.prototype.stopPaddle = function (event) {
		var keyPressed = event.keyCode;
		if (this.side === "right" && ( keyPressed === 79 || keyPressed === 76 ) ) {
			this.direction = [0, 0];
		}
		if (this.side === "left" && ( keyPressed === 87 || keyPressed === 83 ) ) {
			this.direction = [0, 0];
		}
	};

	Paddle.prototype.topWall = function () {
		return this.position[1] <= 0;
	};


})();
