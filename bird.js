const Animal = require("./animal");

class Bird extends Animal {
  constructor(name, species, canFly) {
    super(name, species, 100);
    this._canFly = canFly;
  }

  get canFly() {
    return this._canFly;
  }

  set canFly(newCanFly) {
    this._canFly = newCanFly;
  }

  // Overriding attack method for Bird
  attack(target) {
    if (this._energy <= 0) {
      console.log(`${this._name} has no energy to attack!`);
      return;
    }

    console.log(`${this._name} swoops in to attack ${target.name}!`);
    this._energy -= 20;
    target.energy -= 20;

    if (this._energy <= 0 || target.energy <= 0) {
      this.handleDefeat(target);
    }
  }

  eat() {
    this._energy += 10;
  }
}

module.exports = Bird;
