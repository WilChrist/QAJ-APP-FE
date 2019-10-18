import { Component, OnInit, Input, SimpleChanges, OnChanges } from '@angular/core';
import { IAuthor } from 'src/app/shared/helpers/Interfaces';
import { environment } from 'src/environments/environment';
import { PaginatorConfigurable } from 'src/app/shared/helpers/Classes';

@Component({
  selector: 'app-authors-grid',
  templateUrl: './authors-grid.component.html',
  styleUrls: ['./authors-grid.component.css']
})
export class AuthorsGridComponent implements OnInit, OnChanges {
  @Input() authors: IAuthor[];
  @Input() paginatorConfigurable: PaginatorConfigurable;
  apiBaseUrl = environment.apiBaseUrl;
  paginatedAuthors: IAuthor[];
  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.paginateData();
  }
  onPaginatorChange(event) {
    this.paginateData();
  }

  paginateData() {
    if (this.authors !== undefined) {
      this.paginatedAuthors = this.authors.slice(
      this.paginatorConfigurable.pageEvent.pageIndex *
        this.paginatorConfigurable.pageEvent.pageSize,
      (this.paginatorConfigurable.pageEvent.pageIndex + 1) *
        this.paginatorConfigurable.pageEvent.pageSize
      );
    }
  }
}
