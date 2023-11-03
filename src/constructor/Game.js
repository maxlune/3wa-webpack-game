export class Game {
  players = [];

  initGame() {
    if (this.players.length === 2) {
      console.log("The game can start");
    }
  }

  startGame() {
    // turn = 0;
    player1Health = players[0].health;
    player2Health = players[1].health;

    console.log(this.initiative());

    while (player1Health > 0 && player2Health > 0) {
      // turn++;
    }
  }

  // startGame() {
  //     let turn = 0;

  //     while (this.players[0].health > 0 && this.players[1].health > 0) {
  //         turn++;

  //         console.log(`Tour ${turn}:`);
  //         if (turn % 2 === 1) {
  //             this.players[0].attack(this.players[1]);
  //         } else {
  //             this.players[1].attack(this.players[0]);
  //         }
  //     }
  //     this.endGame();
  // }

  addPlayer(player) {
    this.players.push(player);
  }

  endGame() {
    if (players[0].health > 0 || players[1].health > 0) {
      console.log("GAME OVER");
    }
  }

  initiative() {
    // players
    /* console.log("TEST : ", this.players[0].rollDice(1, 6));
    const resultPlayer1 = this.players[0].rollDice(1, 6);
    const resultPlayer2 = this.players[1].rollDice(1, 6);
    if (resultPlayer1 > resultPlayer2) {
      console.log("Player1 commence");
    } */

    const result = [];
    this.players.map((player) => {
      result.push(player.rollDice(1, 6));
    });

    if (result[0] === result[1]) this.initiative();

    return result[0] > result[1] ? this.players[0] : this.players[1];
  }
}
