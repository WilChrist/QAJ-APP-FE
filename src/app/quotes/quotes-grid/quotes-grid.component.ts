import { Component, OnInit, Input, SimpleChanges, OnChanges } from '@angular/core';
import { IQuote } from 'src/app/shared/helpers/Interfaces';
import { environment } from 'src/environments/environment';
import { PaginatorConfigurable } from 'src/app/shared/helpers/Classes';

@Component({
  selector: 'app-quotes-grid',
  templateUrl: './quotes-grid.component.html',
  styleUrls: ['./quotes-grid.component.css']
})
export class QuotesGridComponent implements OnInit, OnChanges {
  paginatedQuotes: IQuote[];
  @Input() quotes: IQuote[];
  @Input() paginatorConfigurable: PaginatorConfigurable;
  apiBaseUrl = environment.apiBaseUrl;
  quotesClone: IQuote[] = [];
  @Input() filterByProperty: number;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.paginateData();
    if (this.paginatedQuotes) {
      this.filterQuotes(this.filterByProperty);
    }

  }

  filterQuotes(filterBy) {
if (filterBy === 0) {
  this.quotesClone = this.paginatedQuotes.slice(0);
} else {
  this.quotesClone = this.paginatedQuotes.filter(quote => {
    return quote.language_id === filterBy;
  }
  );
}
  }
  onPaginatorChange(event) {
    this.paginateData();
  }

  paginateData() {
    if (this.quotes !== undefined) {
      this.paginatedQuotes = this.quotes.slice(
      this.paginatorConfigurable.pageEvent.pageIndex *
        this.paginatorConfigurable.pageEvent.pageSize,
      (this.paginatorConfigurable.pageEvent.pageIndex + 1) *
        this.paginatorConfigurable.pageEvent.pageSize
      );
    }
  }
}
