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

  // running the entire game method

  runGame() {
    // running the entire game from start to finish, including a reset.

    // setting up the game.
    this.displayWelcome();
    this.displayRules();
    this.determineNumberOfPlayers();
    // game starts
    while ((this.playerOne.score < 2) & (this.playerTwo.score < 2)) {
      this.gestureSelection(); // ask for gestures
      this.compareGestures(); // compare the gestures
      this.displayCurrentScore(); // display the current score
      this.checkGameWinner(); // check for a winner, if not, loop back.
      this.gestureSelection();
      this.compareGestures();
      this.displayCurrentScore();
      this.checkGameWinner();
      // this.resetGame(); // check to see if the individual wishes to reset the game.
    }
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
  gestureSelection() {
    console.log("Commence with the round choice");

    // we need both player's Input
    console.log("Player one:\n");
    this.playerOne.chooseGesture();
    console.log("Player Two:\n");
    this.playerTwo.chooseGesture();

    // console.log(this.playerOne.roundChoice);
    // console.log(this.playerTwo.roundChoice);

    // running the checks for whoever wins,looses and ties!
    // this.compareGestures();
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
    }

    // Checking for invalid input
    // if (
    //   this.playerOne.roundChoice != "Rock" ||
    //   this.playerOne.roundChoice != "Paper" ||
    //   this.playerOne.roundChoice != "Scissors" ||
    //   this.playerOne.roundChoice != "Lizard" ||
    //   this.playerOne.roundChoice != "Spock"
    // ) {
    //   console.log("invalid input.Please enter again!");
    //   this.gestureSelection();
    // }

    // if (
    //   this.playerTwo.roundChoice != "Rock" ||
    //   this.playerTwo.roundChoice != "Paper" ||
    //   this.playerTwo.roundChoice != "Scissors" ||
    //   this.playerTwo.roundChoice != "Lizard" ||
    //   this.playerTwo.roundChoice != "Spock"
    // ) {
    //   console.log("invalid input.Please enter again!");
    //   this.gestureSelection();
    // }

    // STEP ONE: original RPS checks

    if (
      (this.playerOne.roundChoice === "Paper") &
      (this.playerTwo.roundChoice === "Rock")
    ) {
      console.log(`Paper beats rock. ${this.playerOne.name} wins the round!`);
      this.playerOne.score++;
    }

    if (
      (this.playerOne.roundChoice === "Rock") &
      (this.playerTwo.roundChoice === "Paper")
    ) {
      console.log(`Paper beats rock. ${this.playerTwo.name} wins the round!`);
      this.playerTwo.score++;
    }

    if (
      (this.playerOne.roundChoice === "Rock") &
      (this.playerTwo.roundChoice === "Scissors")
    ) {
      console.log(
        `Rock beats Scissors. ${this.playerOne.name} wins the round!`
      );
      this.playerOne.score++;
    }

    if (
      (this.playerOne.roundChoice === "Scissors") &
      (this.playerTwo.roundChoice === "Rock")
    ) {
      console.log(
        `Rock beats Scissors. ${this.playerTwo.name} wins the round!`
      );
      this.playerTwo.score++;
    }

    if (
      (this.playerOne.roundChoice === "Scissors") &
      (this.playerTwo.roundChoice === "Paper")
    ) {
      console.log(
        `Scissors beats Paper. ${this.playerOne.name} wins the round!`
      );
      this.playerOne.score++;
    }

    if (
      (this.playerOne.roundChoice === "Paper") &
      (this.playerTwo.roundChoice === "Scissors")
    ) {
      console.log(
        `Scissors beats Paper. ${this.playerTwo.name} wins the round!`
      );
      this.playerTwo.score++;
    }

    // Lizard and Spock Win conditions

    if (
      (this.playerOne.roundChoice === "Rock") &
      (this.playerTwo.roundChoice === "Lizard")
    ) {
      console.log(
        `Rock crushes Lizard. ${this.playerOne.name} wins the round!`
      );
      this.playerOne.score++;
    }

    if (
      (this.playerOne.roundChoice === "Lizard") &
      (this.playerTwo.roundChoice === "Rock")
    ) {
      console.log(
        `Rock crushes Lizard. ${this.playerTwo.name} wins the round!`
      );
      this.playerTwo.score++;
    }

    if (
      (this.playerOne.roundChoice === "Lizard") &
      (this.playerTwo.roundChoice === "Spock")
    ) {
      console.log(
        `Lizard poisons Spock. ${this.playerOne.name} wins the round!`
      );
      this.playerOne.score++;
    }

    if (
      (this.playerOne.roundChoice === "Spock") &
      (this.playerTwo.roundChoice === "Lizard")
    ) {
      console.log(
        `Lizard poisons Spock. ${this.playerTwo.name} wins the round!`
      );
      this.playerTwo.score++;
    }

    if (
      (this.playerOne.roundChoice === "Spock") &
      (this.playerTwo.roundChoice === "Scissors")
    ) {
      console.log(
        `Spock smashes Scissors. ${this.playerOne.name} wins the round!`
      );
      this.playerOne.score++;
    }

    if (
      (this.playerOne.roundChoice === "Scissors") &
      (this.playerTwo.roundChoice === "Spock")
    ) {
      console.log(
        `Spock smashes Scissors. ${this.playerTwo.name} wins the round!`
      );
      this.playerTwo.score++;
    }

    if (
      (this.playerOne.roundChoice === "Paper") &
      (this.playerTwo.roundChoice === "Spock")
    ) {
      console.log(
        `Paper disapproves of Spock. ${this.playerTwo.name} wins the round!`
      );
      this.playerTwo.score++;
    }

    if (
      (this.playerOne.roundChoice === "Spock") &
      (this.playerTwo.roundChoice === "Paper")
    ) {
      console.log(
        `Paper disapproves of Spock. ${this.playerOne.name} wins the round!`
      );
      this.playerOne.score++;
    }

    if (
      (this.playerOne.roundChoice === "Spock") &
      (this.playerTwo.roundChoice === "Rock")
    ) {
      console.log(
        `Spock vaporizes  Rock. ${this.playerOne.name} wins the round!`
      );
      this.playerOne.score++;
    }

    if (
      (this.playerOne.roundChoice === "Rock") &
      (this.playerTwo.roundChoice === "Spock")
    ) {
      console.log(
        `Spock vaporizes  Rock. ${this.playerTwo.name} wins the round!`
      );
      this.playerTwo.score++;
    }

    if (
      (this.playerOne.roundChoice === "Spock") &
      (this.playerTwo.roundChoice === "Rock")
    ) {
      console.log(
        `Spock vaporizes  Rock. ${this.playerOne.name} wins the round!`
      );
      this.playerOne.score++;
    }

    if (
      (this.playerOne.roundChoice === "Scissors") &
      (this.playerTwo.roundChoice === "Lizard")
    ) {
      console.log(
        `Scissors decapitates  Lizard. ${this.playerOne.name} wins the round!`
      );
      this.playerOne.score++;
    }

    if (
      (this.playerOne.roundChoice === "Lizard") &
      (this.playerTwo.roundChoice === "Spock")
    ) {
      console.log(
        `Scissors decapitates  Lizard. ${this.playerTwo.name} wins the round!`
      );
      this.playerTwo.score++;
    }

    if (
      (this.playerOne.roundChoice === "Lizard") &
      (this.playerTwo.roundChoice === "Paper")
    ) {
      console.log(`Lizard eats  Paper. ${this.playerOne.name} wins the round!`);
      this.playerOne.score++;
    }

    if (
      (this.playerOne.roundChoice === "Paper") &
      (this.playerTwo.roundChoice === "Lizard")
    ) {
      console.log(`Lizard eats  Paper. ${this.playerTwo.name} wins the round!`);
      this.playerTwo.score++;
    }
  }

  checkGameWinner() {
    //  display that win of whoever won the game.
    // compare the scores of Players. Whoever has a score of greater than or equal to two wins!
    // whoever doesn't looses

    //checking if PlayerOne or PlayerTwo won with games out of three.
    if (this.playerOne.score == 2) {
      console.log("GAME OVER!");
      console.log(
        `${this.playerOne.name} is the winner with: ${this.playerOne.score} points.`
      );
    } else if (this.playerTwo.score == 2) {
      console.log("GAME OVER!");
      console.log(
        `${this.playerTwo.name} is the winner with: ${this.playerTwo.score} points.`
      );
    }
  }

  displayCurrentScore() {
    // displays the current score for both players

    console.log("The current Score\n");
    console.log(`${this.playerOne.name} is currently: ${this.playerOne.score}`);
    console.log(`${this.playerTwo.name} is currently: ${this.playerTwo.score}`);
  }

  resetGame() {
    // a function designed to reset the game.
    console.log(" Do you wish to replay the game(y/n");

    let resetInput = input();

    if (resetInput === "y") {
      console.log("Game resetting...");
      this.runGame();
    } else {
      console.log("Thank you for playing, bye!");
      this.PlayerOne.score = 3;
    }
  }
}

// export the game class

// module.exports = {
//   Game: Game
// };

module.exports = Game;
