import { Component } from '@angular/core';
import { Character } from '../interfaces/dbz.interfaces';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent {
  public characters: Character[] = [
    {name:'Goku', power:10000},
    {name:'Vegeta', power:5000}
  ]

  }
