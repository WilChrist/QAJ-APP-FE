import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Quote } from '../quotes.component';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';

@Component({
  selector: 'app-quotes-list',
  templateUrl: './quotes-list.component.html',
  styleUrls: ['./quotes-list.component.css']
})
export class QuotesListComponent implements OnInit {
  @Input() quotes: Quote[];

  dataSource: MatTableDataSource<Quote>;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  // dataSource: Quote[];
  displayedColumns: string[];


  constructor() { }

  ngOnInit() {
    this.displayedColumns = ['id', 'content', 'author'];
    this.dataSource = new MatTableDataSource(this.quotes);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
