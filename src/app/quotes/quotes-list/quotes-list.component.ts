import { Component, OnInit, Input, ViewChild, OnChanges, SimpleChanges } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { IQuote } from 'src/app/shared/helpers/Interfaces';
import { environment } from 'src/environments/environment';
import { PaginatorConfigurable } from 'src/app/shared/helpers/Classes';


@Component({
  selector: 'app-quotes-list',
  templateUrl: './quotes-list.component.html',
  styleUrls: ['./quotes-list.component.css']
})
export class QuotesListComponent implements OnInit, OnChanges {
  @Input() quotes: IQuote[];
  @Input() paginatorConfigurable: PaginatorConfigurable;
  apiBaseUrl = environment.apiBaseUrl;
  @Input() filterByProperty: number;
  quotesClone: IQuote[];

  dataSource: MatTableDataSource<IQuote>;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  displayedColumns: string[];


  constructor() { }

  ngOnInit() {
    this.displayedColumns = ['id', 'content', 'author'];
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (!this.quotesClone) {
      this.quotesClone = this.quotes.slice(0);
    }

    if (this.quotes) {
      this.filterQuotes(this.filterByProperty);
    }
    this.dataSource = new MatTableDataSource(this.quotesClone);
    this.dataSource.sort = this.sort;

    this.paginator.length = this.paginatorConfigurable.length;
    this.paginator.pageIndex = this.paginatorConfigurable.pageEvent.pageIndex;
    this.paginator.pageSize = this.paginatorConfigurable.pageEvent.pageSize;
    this.paginator.pageSizeOptions = this.paginatorConfigurable.pageSizeOptions;
    this.dataSource.paginator = this.paginator;


  }

  filterQuotes(filterBy) {
    if (filterBy === 0) {
      this.quotesClone = this.quotes.slice(0);
    } else {
      this.quotesClone = this.quotes.filter(quote => {
        return quote.language_id === filterBy;
      }
      );
    }
      }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
