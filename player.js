// create a player class for the RPSLS project

// create input with prompt sync
const input = require("prompt-sync")();

class Player {
  // intializing the attributes for a player
  constructor(name) {
    this.name = name;
    this.score = 0;
    this.roundChoice = "";
    this.gestures = ["Rock", "Paper", "Scissors", "Lizard", "Spock"];
  }
  // function displays the player's name.
  displayName() {
    console.log(`This player is named: ${this.name}`);
  }

  // set a person's name

  setName() {
    // create input for the name

    console.log("Please enter your name: ");
    let nameInput = input();
    // set the input equal to name
    this.name = nameInput;

    return this.name;
  }

  // function to enter a gesture for the game
  chooseGesture() {
    // displaying the gestures
    console.log("Please enter a gesture: ");
    let gestureInput = input();

    // set the input equal to gesture
    this.roundChoice = gestureInput;
  }
}

// test the class name attribute

let testPlayer = new Player();

// console.log(testPlayer.name);

// testing the displayName method of player
// testPlayer.displayName();

// testing the setName method
// testPlayer.setName();

// displaying the name
// testPlayer.displayName();

// test the chooseGesture method
// testPlayer.chooseGesture();

//displaying the gesture
console.log(testPlayer.gestures);

// exporting the Player class

module.exports = {
  Player: Player,
};
