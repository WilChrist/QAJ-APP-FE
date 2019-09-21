import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TopicRoutingModule } from './topic-routing.module';
import { TopicComponent } from '../topic/topic.component';
import { TopicDetailsComponent } from './topic-details/topic-details.component';
import { TopicQuotesComponent } from './topic-quotes/topic-quotes.component';


@NgModule({
  declarations: [TopicComponent, TopicDetailsComponent, TopicQuotesComponent],
  imports: [
    CommonModule,
    TopicRoutingModule
  ]
})
export class TopicModule { }
