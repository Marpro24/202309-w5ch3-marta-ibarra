class Character {
  name;
  family;
  age;
  series;
  isAlive = true;

  constructor(characterName) {
    this.name = characterName;
  }

  die() {
    this.isAlive = false;
  }

  communication() {
    return `Hail fellow, I'm ${this.name}`;
  }
}

export default Character;
