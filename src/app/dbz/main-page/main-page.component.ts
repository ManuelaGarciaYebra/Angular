import { Component } from '@angular/core';
import { Character } from '../interfaces/dbz.interfaces';
import { AddNewCharacterComponent } from '../add-new-character/add-new-character.component';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent {
  public characters: Character[] = [
    {name:'Goku', power:10000},
    {name:'Vegeta', power:5000}
  ]
  public newCharacter: Character = {
    name: 'Master Roshi',
    power: 1000,
  }
  public addNewCharacter( argument: Character) {
    this.characters.push(argument)
    
  }

  }
