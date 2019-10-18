import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { IAuthor } from 'src/app/shared/helpers/Interfaces';
import { environment } from 'src/environments/environment';



@Component({
  selector: 'app-authors-list',
  templateUrl: './authors-list.component.html',
  styleUrls: ['./authors-list.component.css']
})
export class AuthorsListComponent implements OnInit {
  @Input() authors: IAuthor[];
  apiBaseUrl = environment.apiBaseUrl;
  dataSource: MatTableDataSource<IAuthor>;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  displayedColumns: string[];


  constructor() { }

  ngOnInit() {
    this.displayedColumns = ['id', 'popular_name', 'biography'];
    this.dataSource = new MatTableDataSource(this.authors);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
