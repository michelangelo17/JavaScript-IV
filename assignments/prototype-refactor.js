/* 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

*/
/*
  Object oriented design is commonly used in video games.  For this part of the assignment you will be implementing several constructor functions with their correct inheritance hierarchy.

  In this file you will be creating three constructor functions: GameObject, CharacterStats, Humanoid.  

  At the bottom of this file are 3 objects that all end up inheriting from Humanoid.  Use the objects at the bottom of the page to test your constructor functions.
  
  Each constructor function has unique properties and methods that are defined in their block comments below:
*/
  
/*
  === GameObject ===
  * createdAt
  * name
  * dimensions (These represent the character's size in the video game)
  * destroy() // prototype method that returns: `${this.name} was removed from the game.`
*/
class GameObject {
  constructor(attrs) {
    this.createdAt = attrs.createdAt;
    this.name = attrs.name;
    this.dimensions = attrs.dimensions;
  }
  destroy() {
    return `${this.name} was removed from the game.`;
  }
}

/*
  === CharacterStats ===
  * healthPoints
  * takeDamage() // prototype method -> returns the string '<object name> took damage.'
  * should inherit destroy() from GameObject's prototype
*/
class CharacterStats extends GameObject {
  constructor(attrs) {
    super(attrs);
    this.healthPoints = attrs.healthPoints;
  }
  takeDamage() {
    return `${this.name} took damage.`;
  }
}


/*
  === Humanoid (Having an appearance or character resembling that of a human.) ===
  * team
  * weapons
  * language
  * greet() // prototype method -> returns the string '<object name> offers a greeting in <object language>.'
  * should inherit destroy() from GameObject through CharacterStats
  * should inherit takeDamage() from CharacterStats
*/
class Humanoid extends CharacterStats {
  constructor(attrs) {
    super(attrs);
    this.team = attrs.team;
    this.weapons = attrs.weapons;
    this.language = attrs.language;
  }
  greet() {
    return `${this.name} offers a greeting in ${this.language}.`;
  }
}
/*
  * Inheritance chain: GameObject -> CharacterStats -> Humanoid
  * Instances of Humanoid should have all of the same properties as CharacterStats and GameObject.
  * Instances of CharacterStats should have all of the same properties as GameObject.
*/

// Test you work by un-commenting these 3 objects and the list of console logs below:


  const mage = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 1,
      height: 1,
    },
    healthPoints: 5,
    name: 'Bruce',
    team: 'Mage Guild',
    weapons: [
      'Staff of Shamalama',
    ],
    language: 'Common Tongue',
  });

  const swordsman = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 2,
      height: 2,
    },
    healthPoints: 15,
    name: 'Sir Mustachio',
    team: 'The Round Table',
    weapons: [
      'Giant Sword',
      'Shield',
    ],
    language: 'Common Tongue',
  });

  const archer = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 1,
      width: 2,
      height: 4,
    },
    healthPoints: 10,
    name: 'Lilith',
    team: 'Forest Kingdom',
    weapons: [
      'Bow',
      'Dagger',
    ],
    language: 'Elvish',
  });

  console.log(mage.createdAt); // Today's date
  console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
  console.log(swordsman.healthPoints); // 15
  console.log(mage.name); // Bruce
  console.log(swordsman.team); // The Round Table
  console.log(mage.weapons); // Staff of Shamalama
  console.log(archer.language); // Elvish
  console.log(archer.greet()); // Lilith offers a greeting in Elvish.
  console.log(mage.takeDamage()); // Bruce took damage.
  console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.


// Stretch task: 
// * Create Villain and Hero constructor functions that inherit from the Humanoid constructor function.  
// * Give the Hero and Villains different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;
// * Create two new objects, one a villain and one a hero and fight it out with methods!
class Hero extends Humanoid {
  constructor(attrs) {
    super(attrs);
    this.power = attrs.power;
    this.speech = attrs.speech;
  }
  usePower() {
    return `${this.name} ${this.power}.`;
  }
  givesSpeech() {
    return `${this.name} says "${this.speech}"`;
  }
}  
// Villian
class Villain extends Humanoid {
  constructor(attrs) {
    super(attrs);
    this.evilSpell = attrs.evilSpell;
    this.evilTrait = attrs.evilTrait;
  }
  useSpell() {
    return `${this.name} uses ${this.evilSpell}.`;
  }
  doesEvilTrait() {
    return `${this.name} ${this.evilTrait}`;
  }
}
  const badGuy = new Villain({
    createdAt: new Date(),
    dimensions: {
      length: 1.5,
      width: 1,
      height: 1,
    },
    healthPoints: 10,
    name: 'Sinister',
    team: 'Pure Evil',
    weapons: [
      'Poison Oak Staff',
    ],
    language: 'Darkness',
    evilSpell: 'Slow Death',
    evilTrait: 'Laughs from beyond the grave . . .'
  });

  const goodGuy = new Hero({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 1.5,
      height: 1.5,
    },
    healthPoints: 17,
    name: 'Unbearably Gallant',
    team: 'Not Goofus',
    weapons: [
      'Magic Sword',
      'Righteousness',
    ],
    language: 'Politeness',
    power: 'Annoys to Death',
    speech: 'Good will always triumph over evil!'
  });

  console.log(badGuy.greet());
  console.log(goodGuy.greet());
  console.log(badGuy.useSpell());
  console.log(goodGuy.usePower());
  console.log(badGuy.takeDamage());
  console.log(goodGuy.takeDamage());
  console.log(badGuy.useSpell());
  console.log(goodGuy.usePower());
  console.log(badGuy.destroy());
  console.log(goodGuy.givesSpeech());
  console.log(goodGuy.destroy());
  console.log(badGuy.doesEvilTrait());;
