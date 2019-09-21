import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuoteRoutingModule } from './quote-routing.module';
import { QuoteComponent } from './quote.component';
import { QuoteDetailsComponent } from './quote-details/quote-details.component';
import { QuoteTopicsComponent } from './quote-topics/quote-topics.component';


@NgModule({
  declarations: [QuoteComponent, QuoteDetailsComponent, QuoteTopicsComponent],
  imports: [
    CommonModule,
    QuoteRoutingModule
  ]
})
export class QuoteModule { }
