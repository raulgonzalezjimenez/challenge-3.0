import { Character } from './characteres';

export class Adviser extends Character {
  characterAdvisor: string;

  constructor(
    name: string,
    family: string,
    age: number,
    range: string = 'asesor',
    message: string = 'No sé por qué, pero creo que voy a morir pronto',
    characterAdvisor: string
  ) {
    super(name, family, age, range, message);

    this.characterAdvisor = characterAdvisor;
  }
}
