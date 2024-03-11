import { Character } from './characteres';

export class Squire extends Character {
  served: string;
  servility: number;
  constructor(
    name: string,
    family: string,
    age: number,
    range: string = 'escudero',
    message: string = 'soy un loser',
    served: string,
    servility: number
  ) {
    super(name, family, age, range, message);
    this.served = served;
    this.servility = servility;
  }
}
