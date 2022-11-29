import { Injectable } from '@angular/core';
import { Character } from '../interfaces/dbz.interfaces';

@Injectable()
export class DbzService {
  private _characters: Character[] = [
    { name: 'Goku', power: 10000 },
    { name: 'Vegeta', power: 5000 },
  ];

  get characters(): Character[] {
    return [...this._characters];
  }
  constructor() {}
  public addCharacters(character: Character) {
    this._characters.push(character);
  }
}
