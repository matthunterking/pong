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

$(() => {

  // set up the game

  const player1 = new Player(1);
  const player2 = new Player(2);

  const $scoreBoard = $('.scoreBoard');
  const $body = $('body');

  $scoreBoard.append(player1.$score);
  $scoreBoard.append(player2.$score);

  player1.location = {
    x: 10,
    y: 200
  };

  player2.location = {
    x: 80,
    y: 200
  };


  $body.append(player1.$paddle);
  $body.append(player2.$paddle);

  player1.$paddle.css({ top: `${player1.location.y}px`, left: `${player1.location.x}%` });
  player2.$paddle.css({ top: `${player2.location.y}px`, left: `${player2.location.x}%` });








});
