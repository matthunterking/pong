class Player {
  constructor(id) {
    this.id = id;
    this.score = 0;
    this.$score = $(`<div class='scoreDisplay' id='player${id}Score'>0</div>`);
    this.location = {};
    this.$paddle = $(`<div class='paddle' id='player${id}Paddle'></div>`);
    this.length = 100;
  }

  move(direction) {
    direction === 'up' ? this.moveUp() : this.moveDown();
  }

  moveUp() {
    this.location.y -= 5;
    console.log(this.location);
    this.$paddle.css({ top: `${this.location.y}px` });
  }

  moveDown() {
    this.location.y += 5;
    this.$paddle.css({ top: `${this.location.y}px` });
  }

}

class Ball {
  constructor(id) {
    this.location = {
      x: 110,
      y: 50
    };
    this.size = 10;
    this.$ball = $(`<div class='ball' id='ball${id}'></div>`);
    this.xVelocity = 5;
    this.yVelocity = 10;
  }

  move() {
    this.location.x += this.xVelocity;
    this.location.y += this.yVelocity;
    this.$ball.css({
      top: `${ball1.location.y}px`,
      left: `${ball1.location.x}px`
    });
    this.checkCollision();
  }

  checkCollision() {
    if(this.location.y + this.size >= playArea.height || this.location.y <= 0) {
      this.yVelocity *= -1;
    }
    console.log('ball top => ', this.location.y);
    console.log('ball bottom => ', this.location.y + this.size);
    console.log('paddle top => ', player2.location.y);
    console.log('paddle bottom => ', player2.location.y + player2.length);
    if(this.location.x >= player2.location.x &&
    this.location.y + this.size >= player2.location.y &&
    this.location.y <= player2.location.y + player2.length ||
    this.location.x <= player1.location.x &&
    this.location.y + this.size >= player1.location.y &&
    this.location.y <= player1.location.y + player1.length
    ) {
      this.xVelocity *= -1;
    }

  }
}


const playArea = {
  width: 1000,
  height: 700
};

let $scoreBoard;
let $playArea;

const player1 = new Player(1);
const player2 = new Player(2);

const ball1 = new Ball(1);

function setUp() {

  $scoreBoard = $('<div class="scoreBoard"></div>');
  $playArea = $('.playArea');

  player1.location = {
    x: 100,
    y: 200
  };

  player2.location = {
    x: 900,
    y: 200
  };

  playArea.$playArea = $('.playArea');

  playArea.$playArea.css({ width: `${this.width}px`, height: `${this.height}px` });


  $playArea.append(ball1.$ball);
  $playArea.append(player1.$paddle);
  $playArea.append(player2.$paddle);
  $playArea.append($scoreBoard);

  $scoreBoard.append(player1.$score);
  $scoreBoard.append(player2.$score);

  player1.$paddle.css({
    top: `${player1.location.y}px`,
    left: `${player1.location.x}px`,
    height: `${player1.height}px`
  });
  player2.$paddle.css({
    top: `${player2.location.y}px`,
    left: `${player2.location.x}px`,
    height: `${player2.height}px`
  });

  ball1.$ball.css({
    top: `${ball1.location.y}px`,
    left: `${ball1.location.x}px`,
    width: `${ball1.size}px`,
    height: `${ball1.size}px`
  });

}

$(() => {

  // set up the game

  setUp();

  $(window).keydown((e) => {
    switch (e.which) {
      // ⬆️
      case 40:
        player2.move('down');
        break;
      // ⬇️
      case 38:
        player2.move('up');
        break;
      // W
      case 87:
        player1.move('up');
        break;
      // S
      case 83:
        player1.move('down');
        break;
    }
  });

  const serve = setInterval(() => {
    ball1.move();
  }, 100);

  function score() {
    clearInterval(serve);
  }

});
