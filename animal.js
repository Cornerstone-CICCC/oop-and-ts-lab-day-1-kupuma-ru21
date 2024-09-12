class Animal {
  static remainingAnimals = 0;

  constructor(name, species, energy) {
    this._name = name;
    this._species = species;
    this._energy = energy;
    Animal.remainingAnimals++;
  }

  // Getters and Setters
  get name() {
    return this._name;
  }

  set name(newName) {
    this._name = newName;
  }

  get species() {
    return this._species;
  }

  set species(newSpecies) {
    this._species = newSpecies;
  }

  get energy() {
    return this._energy;
  }

  set energy(newEnergy) {
    this._energy = newEnergy;
  }

  // Methods
  attack(target) {
    if (this._energy <= 0) {
      console.log(`${this._name} has no energy to attack!`);
      return;
    }

    console.log(`${this._name} attacks ${target.name}!`);
    this._energy -= 10;
    target.energy -= 10;

    if (this._energy <= 0 || target.energy <= 0) {
      this.handleDefeat(target);
    }
  }

  eat() {
    this._energy += 10;
  }

  handleDefeat(target) {
    if (this._energy <= 0) {
      console.log(`${target.name} wins! ${this._name} is out of energy!`);
      Animal.remainingAnimals--;
    }

    if (target.energy <= 0) {
      console.log(`${this._name} wins! ${target.name} is out of energy!`);
      Animal.remainingAnimals--;
    }
  }
}

module.exports = Animal;
