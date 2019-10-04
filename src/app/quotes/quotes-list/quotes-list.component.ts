import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { IQuote } from 'src/app/shared/helpers/Interfaces';


@Component({
  selector: 'app-quotes-list',
  templateUrl: './quotes-list.component.html',
  styleUrls: ['./quotes-list.component.css']
})
export class QuotesListComponent implements OnInit {
  @Input() quotes: IQuote[];

  dataSource: MatTableDataSource<IQuote>;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

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
