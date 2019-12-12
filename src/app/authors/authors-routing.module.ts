import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthorsComponent } from './authors.component';


const routes = [
  {path: 'authors', component: AuthorsComponent, useAsDefault: true},
  {path: ':lang/authors', component: AuthorsComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthorsRoutingModule { }
