import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { ITopic } from 'src/app/shared/helpers/Interfaces';
import { PaginatorConfigurable } from 'src/app/shared/helpers/Classes';

@Component({
  selector: 'app-topics-grid',
  templateUrl: './topics-grid.component.html',
  styleUrls: ['./topics-grid.component.css']
})
export class TopicsGridComponent implements OnInit, OnChanges {
  rawTopics: ITopic[];
  @Input() topics: ITopic[];
  @Input() paginatorConfigurable: PaginatorConfigurable;
  constructor() { }

  ngOnInit() {
  }
  ngOnChanges(changes: import('@angular/core').SimpleChanges): void {

    // console.log(this.topics);
    if (this.topics !== undefined) {
      this.rawTopics = this.topics.slice(
      this.paginatorConfigurable.pageEvent.pageIndex *
        this.paginatorConfigurable.pageEvent.pageSize,
      (this.paginatorConfigurable.pageEvent.pageIndex + 1) *
        this.paginatorConfigurable.pageEvent.pageSize
    );
   }
  }
  onPaginatorChange(event) {
    if (this.topics !== undefined) {
      this.rawTopics = this.topics.slice(
      this.paginatorConfigurable.pageEvent.pageIndex *
        this.paginatorConfigurable.pageEvent.pageSize,
      (this.paginatorConfigurable.pageEvent.pageIndex + 1) *
        this.paginatorConfigurable.pageEvent.pageSize
    );
  }
    // console.log(event);
  }

}
