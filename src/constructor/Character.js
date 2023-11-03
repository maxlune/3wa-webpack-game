export default class Character {
  constructor(name, health, strength) {
    this._name = name;
    this._health = Math.max(health, 0);
    this._strength = Math.max(strength, 0);
  }

  get name() {
    return this._name;
  }

  set name(value) {
    this._name = value;
  }

  get health() {
    return this._health;
  }

  set health(value) {
    this._health = Math.max(value, 0);
  }

  get strength() {
    return this._strength;
  }

  set strength(value) {
    this._strength = Math.max(value, 0);
  }

  attack(target) {
    if (target instanceof Character && target.health > 0) {
      target.health -= this.strength;
      console.log(
        `${this.name} attaque ${target.name} et inflige ${this.strength} points de dégâts.`
      );
    }
  }

  heal(amount) {
    this.health += amount;
    console.log(`${this.name} se soigne et récupère ${amount} points de vie.`);
  }

  rollDice(rollNumbers, diceFaceNumbers) {
    let result = 0;
    for (let i = 0; i < rollNumbers; i++) {
      result += Math.floor(Math.random() * diceFaceNumbers) + 1;
    }
    return result;
  }
}
