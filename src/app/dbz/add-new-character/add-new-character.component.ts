import { Component, Input } from '@angular/core';
import { Character } from '../interfaces/dbz.interfaces';

@Component({
  selector: 'app-add-new-character',
  templateUrl: './add-new-character.component.html',
  styleUrls: ['./add-new-character.component.css']
})
export class AddNewCharacterComponent {
  @Input() characters: Character[]= [];
  @Input() newCharacter: Character = {
    name: '',
    power: 0,
  };
  public add() {
    if(this.newCharacter.name.trim().length === 0){
      return
    }else{
      this.characters.push(this.newCharacter)}//añadimos
      this.newCharacter = {
        name: '',
        power: 0
      }; // limpiamos los imputs

}}
