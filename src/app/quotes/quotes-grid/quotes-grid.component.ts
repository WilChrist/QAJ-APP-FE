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
  @Input() filterByProperty: number;
  quotesClone: IQuote[];

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.quotes && !this.quotesClone) {
      this.quotesClone = this.quotes.slice(0);
    }
    this.filterAndPaginateQuotes();
  }

  filterQuotes(filterBy) {
    if (this.quotesClone !== undefined) {
      if (filterBy === 0) {
        this.quotes = this.quotesClone.slice(0);
      } else {
        this.quotes = this.quotesClone.filter(quote => {
          return quote.language_id === filterBy;
        }
        );
      }
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

  filterAndPaginateQuotes() {
    this.filterQuotes(this.filterByProperty);
    this.paginateData();
  }
}
