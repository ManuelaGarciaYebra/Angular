import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
})
export class HeroComponent {
  public name: string = 'Ironman';
  public age: number = 40;
  public get nameCapitalized(): string {
    return this.name.toUpperCase();
  }
  public getName(): string {
    return `${this.name} - ${this.age}`;
  }
  public changeName(): void {
    this.name = 'Spiderman';
  }
  public changeAge(): void {
    this.age = 20;
  }
}
