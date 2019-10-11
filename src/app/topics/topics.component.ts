import { Component, OnInit } from '@angular/core';
import { DisplayModeEnum } from '../shared/helpers/Enums';
import { ITopic } from '../shared/helpers/Interfaces';
import { DataService } from './../core/services/data.service';

@Component({
  selector: 'app-topics',
  templateUrl: './topics.component.html',
  styleUrls: ['./topics.component.css']
})
export class TopicsComponent implements OnInit {

  topics: ITopic[];
  displayMode: DisplayModeEnum;
  displayModeEnum = DisplayModeEnum;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.getAllTopics().subscribe(
      (data: any) => this.topics = data.data,
      (error: any) => console.log(error),
      () => console.log('finaly...')
    );
    // this.topics = this.dataService.getAllTopics();
    this.displayMode = DisplayModeEnum.Grid;
  }

  changeDisplayMode(mode: DisplayModeEnum) {
    this.displayMode = mode;
  }
}
