import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges
} from '@angular/core';
import { ITopic } from 'src/app/shared/helpers/Interfaces';
import { PaginatorConfigurable } from 'src/app/shared/helpers/Classes';

@Component({
  selector: 'app-topics-grid',
  templateUrl: './topics-grid.component.html',
  styleUrls: ['./topics-grid.component.css']
})
export class TopicsGridComponent implements OnInit, OnChanges {
  paginatedTopics: ITopic[];
  @Input() topics: ITopic[];
  @Input() paginatorConfigurable: PaginatorConfigurable;
  constructor() {}

  ngOnInit() {}
  ngOnChanges(changes: SimpleChanges): void {
    this.paginateData();
  }
  onPaginatorChange(event) {
    this.paginateData();
  }

  paginateData() {
    if (this.topics !== undefined) {
      this.paginatedTopics = this.topics.slice(
        this.paginatorConfigurable.pageEvent.pageIndex *
          this.paginatorConfigurable.pageEvent.pageSize,
        (this.paginatorConfigurable.pageEvent.pageIndex + 1) *
          this.paginatorConfigurable.pageEvent.pageSize
      );
    }
  }
}
