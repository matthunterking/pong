class Player {
  constructor(id) {
    this.id = id;
    this.score = 0;
    this.$score = $(`<div class='scoreDisplay' id='player${id}Score'>0</div>`);
    this.paddleLocation = {};
    this.$paddle = $(`<div class='paddle' id='player${id}Paddle'></div>`);
    this.length = 30;
  }
}

class Ball {
  constructor(id) {
    this.location = {
      x: 11,
      y: 50
    };
    this.size = 10;
    this.$ball = $(`<div class='ball' id='ball${id}'></div>`);
  }
}

let $scoreBoard;
let $body;

const player1 = new Player(1);
const player2 = new Player(2);

const ball1 = new Ball(1);

function setUp() {

  $scoreBoard = $('.scoreBoard');
  $body = $('body');

  player1.location = {
    x: 10,
    y: 200
  };

  player2.location = {
    x: 80,
    y: 200
  };


  $scoreBoard.append(player1.$score);
  $scoreBoard.append(player2.$score);

  $body.append(player1.$paddle);
  $body.append(player2.$paddle);
  $body.append(ball1.$ball);

  player1.$paddle.css({ top: `${player1.location.y}px`, left: `${player1.location.x}%` });
  player2.$paddle.css({ top: `${player2.location.y}px`, left: `${player2.location.x}%` });

  ball1.$ball.css({
    top: `${ball1.location.y}px`,
    left: `${ball1.location.x}%`,
    width: `${ball1.size}px`,
    height: `${ball1.size}px`
  });

}

$(() => {

  // set up the game

  setUp();



});
