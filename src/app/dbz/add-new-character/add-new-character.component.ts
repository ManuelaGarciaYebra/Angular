import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../interfaces/dbz.interfaces';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-add-new-character',
  templateUrl: './add-new-character.component.html',
  styleUrls: ['./add-new-character.component.css'],
})
export class AddNewCharacterComponent {
  @Input() newCharacter: Character = {
    name: '',
    power: 0,
  };
  constructor(private dbzService: DbzService) {}
  public add() {
    if (this.newCharacter.name.trim().length === 0) {
      return;
    }
    this.dbzService.addCharacters(this.newCharacter);
    this.newCharacter = {
      name: '',
      power: 0,
    }; // limpiamos los imputs
  }
}
