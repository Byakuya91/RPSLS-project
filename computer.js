// test code(SUCESSFUL)
// console.log("Hello World!");

let { Player } = require("./player");

// import the Player class and test the player class (SUCESSFUL)

// let player = require("./player");

// let Player = player.Player;

// let testPlayer1 = new Player("Neil");

// console.log(testPlayer1);

// create the computer class

class Computer extends Player {
  // create constructor and inherit from Player class
  constructor() {
    super();
    this.name = "Computer";
  }

  chooseGesture() {
    // generate a random index for Gestures array in Player class
    // returns nunbers of 0 to 4.
    let computerIndex = Math.floor(Math.random() * 5);

    // get the value from gestures Array from Player class.
    // let computerChoice = this.gestures[computerIndex];

    // set the computer choice equal to the roundChoice of the computer.

    this.roundChoice = this.gestures[computerIndex];
  }
}

module.exports = Computer;
