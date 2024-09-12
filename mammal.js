const Animal = require("./animal");

class Mammal extends Animal {
  constructor(name, species, furColor) {
    super(name, species, 200);
    this._furColor = furColor;
  }

  get furColor() {
    return this._furColor;
  }

  set furColor(newFurColor) {
    this._furColor = newFurColor;
  }

  // Overriding attack method for Mammal
  attack(target) {
    if (this._energy <= 0) {
      console.log(`${this._name} has no energy to attack!`);
      return;
    }

    console.log(`${this._name} lunges to attack ${target.name}!`);
    this._energy -= 50;
    target.energy -= 50;

    if (this._energy <= 0 || target.energy <= 0) {
      this.handleDefeat(target);
    }
  }

  eat() {
    this._energy += 20;
  }
}

module.exports = Mammal;
