import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css'],
})
export class CounterComponent {
  public title: string = 'Contador App';
  public base: number = 5;
  public number: number = 10;
  acumular(value: number) {
    this.number += value;
  }
}
