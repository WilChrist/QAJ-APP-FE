import { Component, OnInit } from '@angular/core';
import { DisplayModeEnum } from '../shared/helpers/Enums';
import { ITopic } from '../shared/helpers/Interfaces';
import { DataService } from './../core/services/data.service';
import { PaginatorConfigurable } from '../shared/helpers/Classes';
import { PageEvent } from '@angular/material';

@Component({
  selector: 'app-topics',
  templateUrl: './topics.component.html',
  styleUrls: ['./topics.component.css']
})
export class TopicsComponent implements OnInit {
  topics: ITopic[];
  rawTopics: ITopic[];
  displayMode: DisplayModeEnum;
  paginatorConfigurable: PaginatorConfigurable;
  displayModeEnum = DisplayModeEnum;

  // MatPaginator Output
  pageEvent: PageEvent;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.paginatorConfigurable = new PaginatorConfigurable();
    this.dataService.getAllTopics().subscribe(
      (data: any) => {
        this.topics = data.data;
        this.paginatorConfigurable = new PaginatorConfigurable(
          this.topics.length,
          2,
          [2, 4, 8, 12, 24, 48, 96]
        );
      },
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
