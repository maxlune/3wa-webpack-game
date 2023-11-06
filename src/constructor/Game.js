export class Game {
  players = [];

  initGame() {
    if (this.players.length === 2) {
      console.log("The game can start");
    }
  }

  startGame() {
    // turn = 0;

    let starter;
    const player1Health = this.players[0].health;
    const player2Health = this.players[1].health;

    let attacker = this.initiative();

    attacker.name === this.players[0].name
      ? (starter = this.players[0])
      : (starter = this.players[1]);

    /* while (player1Health > 0 && player2Health > 0) {
      turn++;
    } */
  }

  addPlayer(player) {
    this.players.push(player);
  }

  endGame() {
    if (this.players[0].health > 0 || this.players[1].health > 0) {
      console.log("GAME OVER");
    }
  }

  initiative() {
    const result = [];
    this.players.map((player) => {
      result.push(player.rollDice(1, 6));
    });

    if (result[0] === result[1]) this.initiative();
    return result[0] > result[1] ? this.players[0] : this.players[1];
  }

  get players() {
    return this.players;
  }
}
