import { Component } from '@angular/core';
import { DbzService } from '../services/dbz.service';
import { Character } from '../interfaces/character.interface';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent {

  constructor(private _dbzService: DbzService)
  {}

  get characters(): Character[] {
    console.log("Arreglo normal",this._dbzService.characterList);
    console.log("Arreglo spread", [...this._dbzService.characterList]);
    return [...this._dbzService.characterList];
  }

  onDeleteCharacter(id: string){
    this._dbzService.deleteCharacterById(id);
  }

  onNewCharacter(character: Character): void{
    this._dbzService.addNewCharacter(character);
  }
}
