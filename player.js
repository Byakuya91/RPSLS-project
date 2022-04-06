// create a player class for the RPSLS project

// create input with prompt sync
const input = require("prompt-sync")();

class Player {
  // intializing the attributes for a player
  constructor(name) {
    this.name = name;
    this.score = 0;
    this.roundChoice = "";
    this.gesture = "";
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
}

// test the class name attribute

let testPlayer = new Player("Neil");

// console.log(testPlayer.name);

// testing the displayName method of player
testPlayer.displayName();

// testing the setName method
testPlayer.setName();

// displaying the name
testPlayer.displayName();
