import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthorRoutingModule } from './author-routing.module';
import { AuthorComponent } from './author.component';
import { AuthorDetailsComponent } from './author-details/author-details.component';
import { AuthorQuotesComponent } from './author-quotes/author-quotes.component';


@NgModule({
  declarations: [AuthorComponent, AuthorDetailsComponent, AuthorQuotesComponent],
  imports: [
    CommonModule,
    AuthorRoutingModule
  ]
})
export class AuthorModule { }
