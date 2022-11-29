import { Component } from '@angular/core';
import { Character } from '../interfaces/dbz.interfaces';
import { AddNewCharacterComponent } from '../add-new-character/add-new-character.component';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent {

  public newCharacter: Character = {
    name: 'Master Roshi',
    power: 1000,
  };

  constructor() {}
}
