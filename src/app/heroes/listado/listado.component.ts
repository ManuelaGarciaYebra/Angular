import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css'],
})



export class ListadoComponent {
  public hero: string[] = ['Ironman', 'Batman', 'Spiderman', 'Hulk', 'Thor'];
  public deletedHero: string= '';
  deleteHero() {
    this.deletedHero = this.hero.pop() || '';
    //por defecto nos puede dar string o undefined, ts nos dará error de tipado y debemos indicarle que puede resultar ese tipo tb
  }
}
