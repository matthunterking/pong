class Player {
  constructor(id) {
    this.id = id;
    this.score = 0;
    this.$score = `<div class='scoreDisplay' id='${id}Score'>0</div>`;
    this.paddleLocation = {};
    this.$paddle = `<div id='${id}Paddle'></div>`;
    this.length = 30;
  }
}

$(() => {

  // set up the game

  const player1 = new Player(1);
  const player2 = new Player(2);

  const $scoreBoard = $('.scoreBoard');

  $scoreBoard.append(player1.$score);
  $scoreBoard.append(player2.$score);






});
