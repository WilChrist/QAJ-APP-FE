import { Component, OnInit } from '@angular/core';
import { DisplayModeEnum } from '../shared/helpers/Enums';

export interface ITopic {
  id: number;
  name: string;
  description: string;
  created_at: string;
  updated_at: string;
}

const dataT: ITopic[] = [
  {
    id: 1,
    name: 'Apologetic',
    description: 'the defense of the faith',
    created_at: '2019-09-02 17:02:34',
    updated_at: '2019-09-02 17:02:34'
    },
    {
    id: 2,
    name: 'Agnostic',
    description: 'In the Middle with many doubts',
    created_at: '2019-09-02 17:02:51',
    updated_at: '2019-09-02 17:02:51'
    },
    {
    id: 3,
    name: 'Resurrection',
    description: `a capitalized : the rising of Christ from the dead
                  b often capitalized : the rising again to life of all the human dead before the final judgment
                  c : the state of one risen from the dead`,
    created_at: '2019-09-03 09:00:48',
    updated_at: '2019-09-03 09:00:48'
    },
    {
    id: 4,
    name: 'Cross',
    description: `a : a structure consisting of an upright with a transverse beam used especially by the ancient Romans for execution
                  b often capitalized : the cross on which Jesus was crucified`,
    created_at: '2019-09-03 09:03:00',
    updated_at: '2019-09-03 09:03:00'
    }
];

@Component({
  selector: 'app-topics',
  templateUrl: './topics.component.html',
  styleUrls: ['./topics.component.css']
})
export class TopicsComponent implements OnInit {

  topics: ITopic[];
  displayMode: DisplayModeEnum;
  displayModeEnum = DisplayModeEnum;

  constructor() {}

  ngOnInit() {
    this.topics = dataT;
    this.displayMode = DisplayModeEnum.Grid;
  }

  changeDisplayMode(mode: DisplayModeEnum) {
    this.displayMode = mode;
  }
}
