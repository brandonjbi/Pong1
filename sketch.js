let ball, p1, p2;
let go = false;


function setup() {
  
	createCanvas(700, 400);
	ball = new Ball(width/2, height/2, 10, 10);

	p1 = new Paddle(20, height/2 - 50, 10, 100);
	p2 = new Paddle(width - 30, height/2 - 50, 10, 100);
}


function draw() {
	background(0,0,150);
	backdrop();

	movePaddles();
	p1.show();
	p2.show();

	let oob = ball.outOfBounds();
	if (oob) {
	
		go = false;
		if (oob == 'right') {
			p2.score++;
		} else {
			p1.score++;
		}
	}

	if (go) ball.update();

	ball.hit(p1,p2);

	ball.show()
}


function movePaddles() {
	// 87 = 'W'
	if (keyIsDown(87)) {
		p1.move(-5);
	}
	
	// 83 = 'S'
	if (keyIsDown(83)) {
		p1.move(5);
	}
	
	// 73 = 'I'
	if (keyIsDown(73)) {
		p2.move(-5);
	}
	
	// 75 = 'K'
	if (keyIsDown(75)) {
		p2.move(5);
	}
}

function keyTyped() {
	if (key == ' ') {
		go = true;
	}

	if (key == 'r') {
		p1.score = 0;
		p2.score = 0;
		ball.resetball();
		go = false;
	}


	return false;
}