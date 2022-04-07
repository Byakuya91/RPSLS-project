// inherit from Player class
let { Player } = require("./player");

// create Human class and inherit from Player class

class Human extends Player {
  constructor() {
    super();
  }
}

// export the Human class

module.exports = Human;
