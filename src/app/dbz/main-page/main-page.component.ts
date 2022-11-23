import { Component } from '@angular/core';

interface Character {
  name: string;
  power: number;
}
@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent {
  public newCharacter: Character = {
    name: 'Trunks',
    power: 1400,
  };
  public add() {
    console.log(this.newCharacter)
  }
}
