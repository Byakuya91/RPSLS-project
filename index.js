const Computer = require("./computer");

const Game = require("./game");

const Human = require("./human");

// test code
// console.log("Hello World!");

// testing the Computer class and its round choice

// let testComputer = new Computer();

// testComputer.chooseGesture();

// console.log(testComputer.roundChoice);

// testing the Human class

// let TestHuman = new Human();

// // testing a gesture

// TestHuman.chooseGesture();

// // display the gesture

// console.log(TestHuman.roundChoice);

// testing the Game class
let testGame = new Game();

// testing the Welcome (SUCESSS)
// testGame.displayWelcome();

// testing the displayrules (SUCESS)

// testGame.displayRules();

// testing the Determine Number of Players(SUCESS maybe?)

// testGame.determineNumberOfPlayers();

// testing game functionn

testGame.determineNumberOfPlayers();
testGame.runRounds();
testGame.compareGestures();
testGame.checkGameWinner();
