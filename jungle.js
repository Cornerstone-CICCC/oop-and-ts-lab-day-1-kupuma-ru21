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

// DRIVER CODE: Create instances of the subclasses and use their properties and methods.

const eagle = new Bird("Eagle", "Bird of Prey", true);
console.log(
  `Name: ${eagle.name}, Species: ${eagle.species}, Can Fly: ${eagle.canFly}`
);

const lion = new Mammal("Lion", "Big Cat", "Golden");
console.log(
  `Name: ${lion.name}, Species: ${lion.species}, Fur Color: ${lion.furColor}`
);

const snake = new Reptile("Snake", "Serpent", true);
console.log(
  `Name: ${snake.name}, Species: ${snake.species}, Cold-Blooded: ${snake.coldBlooded}`
);

// Example attack
console.log("\n--- Attacks ---");
eagle.attack(lion);
console.log(`Eagle's energy: ${eagle.energy}`);
console.log(`Lion's energy: ${lion.energy}`);

lion.attack(snake);
console.log(`Lion's energy: ${lion.energy}`);
console.log(`Snake's energy: ${snake.energy}`);

// Display the remaining number of animals with energy
console.log(`\nRemaining animals with energy: ${Animal.remainingAnimals}`);

// Example eating
console.log("\n--- Eating ---");
eagle.eat();
console.log("Eagle eats and gains energy!");
console.log(`Eagle's energy: ${eagle.energy}`);

lion.eat();
console.log("Lion eats and gains energy!");
console.log(`Lion's energy: ${lion.energy}`);

snake.eat();
console.log("Snake eats and gains energy!");
console.log(`Snake's energy: ${snake.energy}`);

console.log(`\nRemaining animals with energy: ${Animal.remainingAnimals}`);
