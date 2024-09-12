const Animal = require("./animal");

class Reptile extends Animal {
  constructor(name, species, coldBlooded) {
    super(name, species, 100);
    this._coldBlooded = coldBlooded;
  }

  get coldBlooded() {
    return this._coldBlooded;
  }

  set coldBlooded(newColdBlooded) {
    this._coldBlooded = newColdBlooded;
  }

  // Overriding attack method for Reptile
  attack(target) {
    if (this._energy <= 0) {
      console.log(`${this._name} has no energy to attack!`);
      return;
    }

    console.log(`${this._name} slithers in to attack ${target.name}!`);
    this._energy -= 30;
    target.energy -= 30;

    if (this._energy <= 0 || target.energy <= 0) {
      this.handleDefeat(target);
    }
  }

  eat() {
    this._energy += 15;
  }
}

module.exports = Reptile;
