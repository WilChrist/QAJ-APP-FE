import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuotesRoutingModule } from './quotes-routing.module';
import { QuotesComponent } from './quotes.component';
import { QuotesGridComponent } from './quotes-grid/quotes-grid.component';
import { QuotesListComponent } from './quotes-list/quotes-list.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [QuotesComponent, QuotesGridComponent, QuotesListComponent],
  imports: [
    CommonModule,
    QuotesRoutingModule,
    SharedModule
  ],
  exports: [QuotesComponent]
})
export class QuotesModule { }
