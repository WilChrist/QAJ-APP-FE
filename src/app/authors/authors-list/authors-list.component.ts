import { Component, OnInit, Input, ViewChild, SimpleChanges, OnChanges } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { IAuthor } from 'src/app/shared/helpers/Interfaces';
import { environment } from 'src/environments/environment';
import { PaginatorConfigurable } from 'src/app/shared/helpers/Classes';



@Component({
  selector: 'app-authors-list',
  templateUrl: './authors-list.component.html',
  styleUrls: ['./authors-list.component.css']
})
export class AuthorsListComponent implements OnInit, OnChanges {
  @Input() authors: IAuthor[];
  @Input() paginatorConfigurable: PaginatorConfigurable;
  apiBaseUrl = environment.apiBaseUrl;
  dataSource: MatTableDataSource<IAuthor>;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  displayedColumns: string[];


  constructor() { }

  ngOnInit() {
    this.displayedColumns = ['id', 'popular_name', 'biography'];
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.dataSource = new MatTableDataSource(this.authors);
    this.dataSource.sort = this.sort;

    this.paginator.length = this.paginatorConfigurable.length;
    this.paginator.pageIndex = this.paginatorConfigurable.pageEvent.pageIndex;
    this.paginator.pageSize = this.paginatorConfigurable.pageEvent.pageSize;
    this.paginator.pageSizeOptions = this.paginatorConfigurable.pageSizeOptions;
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
