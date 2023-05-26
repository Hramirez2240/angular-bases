import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid';
import { Character } from '../interfaces/character.interface';

@Injectable({providedIn: 'root'})
export class DbzService {
  constructor() { }

  public characterList: Character[] = [
    {
      id: uuid(),
      name: "Goku",
      power: 5000
    },
    {
      id: uuid(),
      name: "Vegueta",
      power: 4500
    }
  ];

  public addNewCharacter(character: Character): void{

    const newCharacter: Character = {
      ...character,
      id: uuid()
    };

    this.characterList.push(newCharacter);
  }

  public deleteCharacterById(id: string): void{
    this.characterList = this.characterList.filter(character => character.id !== id);
  }

}
