import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common'
import { HeroComponent } from './hero/hero.component';
import { ListadoComponent } from './listado/listado.component';

@NgModule({
  declarations: [
    HeroComponent, 
    ListadoComponent
],
exports: [
    ListadoComponent,
    HeroComponent
],
imports: [
    CommonModule,
]
})
export class HeroesModules {}
