import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './core/navigation/error-pages/not-found/not-found.component';


const routes: Routes = [
  {path: '404', component: NotFoundComponent},
  {path: '', redirectTo: 'quotes', pathMatch: 'full'},
  {path: '**', redirectTo: '404', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
