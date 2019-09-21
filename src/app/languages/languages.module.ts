import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LanguagesRoutingModule } from './languages-routing.module';
import { LanguagesComponent } from '../languages/languages.component';
import { LanguagesGridComponent } from './languages-grid/languages-grid.component';
import { LanguagesListComponent } from './languages-list/languages-list.component';


@NgModule({
  declarations: [LanguagesComponent, LanguagesGridComponent, LanguagesListComponent],
  imports: [
    CommonModule,
    LanguagesRoutingModule
  ]
})
export class LanguagesModule { }
