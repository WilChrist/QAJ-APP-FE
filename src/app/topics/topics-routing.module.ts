import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TopicsComponent } from './topics.component';


const routes = [
  {path: 'topics', component: TopicsComponent,useAsDefault: true},
  {path: ':lang/topics', component: TopicsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TopicsRoutingModule { }
