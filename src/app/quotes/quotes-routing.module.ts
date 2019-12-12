import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuotesComponent } from './quotes.component';


const routes = [
  {path: 'quotes', component: QuotesComponent, useAsDefault: true},
  {path: ':lang/quotes', component: QuotesComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuotesRoutingModule { }
