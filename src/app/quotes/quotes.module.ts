import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuotesRoutingModule } from './quotes-routing.module';
import { QuotesComponent } from './quotes.component';
import { QuotesGridComponent } from './quotes-grid/quotes-grid.component';
import { QuotesListComponent } from './quotes-list/quotes-list.component';


@NgModule({
  declarations: [QuotesComponent, QuotesGridComponent, QuotesListComponent],
  imports: [
    CommonModule,
    QuotesRoutingModule
  ]
})
export class QuotesModule { }
