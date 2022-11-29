import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MainPageComponent } from './main-page/main-page.component';
import { CharactersComponent } from './characters/characters.component';
import { AddNewCharacterComponent } from './add-new-character/add-new-character.component';
import { DbzService } from './services/dbz.service';

@NgModule({
  declarations: [
    MainPageComponent,
    CharactersComponent,
    AddNewCharacterComponent,
  ],
  exports: [MainPageComponent],
  imports: [CommonModule, FormsModule],
  providers: [DbzService],
})
export class DbzModule {}
