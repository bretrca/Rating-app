import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreModule } from '@ngrx/store';
import { counterRandom } from '../counter.random';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forRoot({count:counterRandom})
  ]
})
export class MainPageModule { }
