import { Character } from './characteres';

export class King extends Character {
  yearsReign: number;

  constructor(
    name: string,
    family: string,
    age: number,
    range: string = 'rey',
    message: string = 'Vais a morir todos',
    yearsReign: number
  ) {
    super(name, family, age, range, message);

    this.yearsReign = yearsReign;
  }
}
