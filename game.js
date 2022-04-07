// import the human and computer class

const Computer = require("./computer");

const Human = require("./human");

// const Player = require("./player");

// create an input with prompt-sync

const input = require("prompt-sync")();

// create the Game class

// define the constructor
class Game {
  Constructor() {
    //super();
    // define attributes
    this.playerOne = null;
    this.playerTwo = null;
  }

  // method to greet the Players
  displayWelcome() {
    console.log("Welcome to RPSLS!\n We hope you enjoy yourselves. ");
  }

  // displays the rules to everyone playing the game.
  displayRules() {
    console.log(
      "The rules are as follows:\n Each player will choose one gesture during  ('Rock','Paper', 'Scissor','Lizard' and Spock) for each round. Whoever has the higher gesture is declared the winner of the round. If both players have the same gesture it is a draw and another round commences. The rounds are best two out of three. Whoever wins two round is declared the winner!  \n "
    );
  }
  // determines who is playing(Human or computer and takes in their names)
  determineNumberOfPlayers() {
    // we need to ask how many people are playing.
    // if we have two players, we create two Human players.
    //  else we create a Computer player.
    // we ask the human player what their name is and display it.

    // taking in how many players will be partaking in the game. Note this is a String input!
    console.log("Please enter how many players are going to play: ");
    let numberOfPlayers = input();

    // checking to see if two was entered.

    if (parseInt(numberOfPlayers) === 2) {
      // create two human players
      this.playerOne = new Human(); // Human object
      this.playerTwo = new Human();
    } else {
      // creates one human player and one Computer player.
      this.playerOne = new Human();
      this.playerTwo = new Computer(); // Computer object
    }

    // ask for the players names

    //     if (this.playerOne == this.Human) {
    //       this.playerOne = this.
    //   }
  }
  // the game's rounds will commence and players will choose gestures.
  runRounds() {
    console.log("Commence with the round");

    // we need both player's Input
    this.playerOne.chooseGesture();
    this.playerTwo.chooseGesture();

    console.log(this.playerOne.roundChoice);

    this.compareGestures();

    // Rules for victory
    // equal choices result in a draw!
    // Paper beats Rock
    // Rock beats Scissors
    // Scissors beats Paper
    // Rock beats Lizard
    // Lizard beats Spock
  }

  compareGestures() {}

  checkGameWinner() {}

  displayWinner() {}

  askToRestart() {}

  runGame() {}
}

// export the game class

// module.exports = {
//   Game: Game
// };

module.exports = Game;
