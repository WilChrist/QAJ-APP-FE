import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TopicsRoutingModule } from './topics-routing.module';
import { TopicsComponent } from '../topics/topics.component';
import { TopicsGridComponent } from './topics-grid/topics-grid.component';
import { TopicsListComponent } from './topics-list/topics-list.component';


@NgModule({
  declarations: [TopicsComponent, TopicsGridComponent, TopicsListComponent],
  imports: [
    CommonModule,
    TopicsRoutingModule
  ]
})
export class TopicsModule { }
