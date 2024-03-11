import { Character } from './characteres';

export class Fighter extends Character {
  weapon: string;
  skill: number;

  constructor(
    name: string,
    family: string,
    age: number,
    range: string = 'luchador',
    message: string = 'Primero pego y luego pregunto',
    weapon: string,
    skill: number
  ) {
    super(name, family, age, range, message);
    this.weapon = weapon;
    this.skill = skill;
  }
}
