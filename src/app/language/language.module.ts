import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LanguageRoutingModule } from './language-routing.module';
import { LanguageComponent } from '../language/language.component';
import { LanguageDetailsComponent } from './language-details/language-details.component';
import { LanguageQuotesComponent } from './language-quotes/language-quotes.component';


@NgModule({
  declarations: [LanguageComponent, LanguageDetailsComponent, LanguageQuotesComponent],
  imports: [
    CommonModule,
    LanguageRoutingModule
  ]
})
export class LanguageModule { }
