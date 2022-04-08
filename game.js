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
    console.log(this.playerTwo.roundChoice);

    // running the checks for victory, defeat and tie!
    this.compareGestures();
  }

  compareGestures() {
    // Rules for victory
    // equal choices result in a draw!
    // Paper beats Rock
    // Rock beats Scissors
    // Scissors beats Paper
    // Rock beats Lizard
    // Lizard beats Spock

    // check if PlayerOne and PlayerTwo's input are the same
    if (this.playerOne.roundChoice === this.playerTwo.roundChoice) {
      console.log("Draw! Please enter new gestures!");
      // Traditional RPS checks
      //1) Rock and Paper checks
    } else if (
      (this.playerOne.roundChoice === "Rock") &
      (this.playerTwo.roundChoice === "Paper")
    ) {
      console.log("Paper Beats Rock! Player Two wins the round!");
      this.playerTwo.score += 1;
    } else if (
      (this.playerOne.roundChoice === "Paper") &
      (this.playerTwo.roundChoice === "Rock")
    ) {
      console.log("Paper Beats Rock! Player One wins the round!");
      this.playerOne.score += 1;
      // 2)Scissors and Paper checks
    } else if (
      (this.playerOne.roundChoice === "Scissors") &
      (this.playerTwo.roundChoice === "Paper")
    ) {
      console.log("Scissors Beats Paper! Player One wins the round!");
      this.playerOne.score += 1;
    } else if (
      (this.playerOne.roundChoice === "Paper") &
      (this.playerTwo.roundChoice === "Scissors")
    ) {
      console.log("Scissors Beats Paper! Player Two wins the round!");
      this.playerTwo.score += 1;
      //3) Rock and Scissor checks
    } else if (
      (this.playerOne.roundChoice === "Rock") &
      (this.playerTwo.roundChoice === "Scissors")
    ) {
      console.log("Rock Beats Scissors! Player One wins the round!");
      this.playerOne.score += 1;
    } else if (
      (this.playerOne.roundChoice === "Scissors") &
      (this.playerTwo.roundChoice === "Rock")
    ) {
      console.log("Rock Beats Scissors! Player Two wins the round!");
      this.playerTwo.score += 1;
      // Spock, lizard implemented
      // 1) Rock and Lizard checks
    } else if (
      (this.playerOne.roundChoice === "Rock") &
      (this.playerTwo.roundChoice === "Lizard")
    ) {
      console.log("Rock crushes Lizard! PLayer One wins the round!");
      this.playerOne.score += 1;
    } else if (
      (this.playerOne.roundChoice === "Lizard") &
      (this.playerTwo.roundChoice === "Rock")
    ) {
      console.log("Rock crushes Lizard! Player Two wins the round!");
      this.playerTwo.score += 1;
      // Lizard and Spock checks
    } else if (
      (this.playerOne.roundChoice === "Lizard") &
      (this.playerTwo.roundChoice === "Spock")
    ) {
      console.log("Lizard poisons Spock! Player One wins the round!");
      this.playerOne.score += 1;
    } else if (
      (this.playerOne.roundChoice === "Spock") &
      (this.playerTwo.roundChoice === "Lizard")
    ) {
      console.log("Lizard poisons Spock! Player Two wins the round!");
      this.playerTwo.score += 1;
      // Scissors and Spock check
    } else if (
      (this.playerOne.roundChoice === "Spock") &
      (this.playerTwo.roundChoice === "Scissors")
    ) {
      console.log("Spock smashes Scissors! Player One wins the round!");
      this.playerOne.score += 1;
    } else if (
      (this.playerOne.roundChoice === "Scissors") &
      (this.playerTwo.roundChoice === "Spock")
    ) {
      console.log("Spock smashes Scissors! Player Two wins the round!");
      this.playerTwo.score += 1;
      // Scissors decapitate Lizards check
    } else if (
      (this.playerOne.roundChoice === "Scissors") &
      (this.playerTwo.roundChoice === "Lizard")
    ) {
      console.log("Scissors decapitates Lizard! Player One wins the round!");
      this.playerOne.score += 1;
    } else if (
      (this.playerOne.roundChoice === "Lizard") &
      (this.playerTwo.roundChoice === "Scissors")
    ) {
      console.log("Scissors decapitates Lizard! Player Two wins the round!");
      this.playerTwo.score += 1;
      // Lizard eats Paper checks
    } else if (
      (this.playerOne.roundChoice === "Lizard") &
      (this.playerTwo.roundChoice === "Paper")
    ) {
      console.log("Lizard eats Paper! Player One wins the round!");
      this.playerOne.score += 1;
    } else if (
      (this.playerOne.roundChoice === "Paper") &
      (this.playerTwo.roundChoice === "Lizard")
    ) {
      console.log("Lizard eats Paper! Player Two wins the round!");
      this.playerTwo.score += 1;
      // Paper disapproves of Spock checks
    } else if (
      (this.playerOne.roundChoice === "Paper") &
      (this.playerTwo.roundChoice === "Spock")
    ) {
      console.log("Paper disapproves of Spock! Player Two wins the round!");
      this.playerTwo.score += 1;
    } else if (
      (this.playerOne.roundChoice === "Spock") &
      (this.playerTwo.roundChoice === "Paper")
    ) {
      console.log("Paper disapproves of Spock! Player One wins the round!");
      this.playerOne.score += 1;
      // Spock vaporizes Rock checks
    } else if (
      (this.playerOne.roundChoice === "Spock") &
      (this.playerTwo.roundChoice === "Rock")
    ) {
      console.log("Spock vaporizes Rock! Player One wins the round!");
      this.playerOne.score += 1;
    } else if (
      (this.playerOne.roundChoice === "Rock") &
      (this.playerTwo.roundChoice === "Spock")
    ) {
      console.log("Spock vaporizes Rock! Player Two wins the round!");
      this.playerOne.score += 1;
    }

    // Check if both Player's inputs are valid(To due)
  }

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
