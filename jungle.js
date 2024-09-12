const Animal = require("./animal");
const Bird = require("./bird");
const Mammal = require("./mammal");
const Reptile = require("./reptile");

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
