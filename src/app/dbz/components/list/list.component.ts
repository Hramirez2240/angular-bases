import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  @Output()
  public onDeleteCharacterById: EventEmitter<string> = new EventEmitter();

  @Input()
  public characters: Character[] = [];

  public onDeleteCharacter(id: string): void{
    this.onDeleteCharacterById.emit(id);
  }

}
