import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthorsRoutingModule } from './authors-routing.module';
import { AuthorsComponent } from './authors.component';
import { AuthorsGridComponent } from './authors-grid/authors-grid.component';
import { AuthorsListComponent } from './authors-list/authors-list.component';


@NgModule({
  declarations: [AuthorsComponent, AuthorsGridComponent, AuthorsListComponent],
  imports: [
    CommonModule,
    AuthorsRoutingModule
  ]
})
export class AuthorsModule { }
