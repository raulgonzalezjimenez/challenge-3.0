export class Character {
  name: string;
  family: string;
  alive: boolean;
  age: number;
  range: string;
  static serie: string = 'Juego de tronos';
  message: string;

  constructor(
    name: string,
    family: string,
    age: number,
    range: string,
    message: string
  ) {
    this.name = name;
    this.family = family;
    this.alive = true;
    this.age = age;
    this.range = range;
    this.message = message;
  }

  speak() {
    return this.message;
  }

  dead() {
    this.alive = false;
  }
}
