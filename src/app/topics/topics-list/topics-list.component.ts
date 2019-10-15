import { Component, OnInit, Input, ViewChild, OnChanges } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { ITopic } from 'src/app/shared/helpers/Interfaces';
import { PaginatorConfigurable } from 'src/app/shared/helpers/Classes';


@Component({
  selector: 'app-topics-list',
  templateUrl: './topics-list.component.html',
  styleUrls: ['./topics-list.component.css']
})
export class TopicsListComponent implements OnInit, OnChanges {
  @Input() topics: ITopic[];
  dataSource: MatTableDataSource<ITopic>;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  @Input() paginatorConfigurable: PaginatorConfigurable;
  displayedColumns: string[];

  constructor() { }

  ngOnInit() {

    this.displayedColumns = ['id', 'name', 'description'];
  }

  ngOnChanges(changes: import('@angular/core').SimpleChanges): void {
    this.dataSource = new MatTableDataSource(this.topics);
    this.dataSource.sort = this.sort;

    this.paginator.length = this.paginatorConfigurable.length;
    this.paginator.pageIndex = this.paginatorConfigurable.pageEvent.pageIndex;
    this.paginator.pageSize = this.paginatorConfigurable.pageEvent.pageSize;
    this.paginator.pageSizeOptions = this.paginatorConfigurable.pageSizeOptions;
    this.dataSource.paginator = this.paginator;

    // console.log(this.paginator);
  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
