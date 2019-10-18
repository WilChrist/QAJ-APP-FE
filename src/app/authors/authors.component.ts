import { Component, OnInit } from '@angular/core';
import { DisplayModeEnum } from '../shared/helpers/Enums';
import { IAuthor } from '../shared/helpers/Interfaces';
import { DataService } from '../core/services/data.service';
import { PaginatorConfigurable } from '../shared/helpers/Classes';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {
  authors: IAuthor[];
  displayMode: DisplayModeEnum;
  displayModeEnum = DisplayModeEnum;
  paginatorConfigurable: PaginatorConfigurable;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.paginatorConfigurable = new PaginatorConfigurable();
    this.dataService.getAllAuthors().subscribe(
      (data: any) => {
        this.authors =  data.data;
        this.paginatorConfigurable = new PaginatorConfigurable(
          this.authors.length,
          4,
          [4, 8, 12, 24, 48, 96]
        );
      }
    );
    this.displayMode = DisplayModeEnum.Grid;
  }

  changeDisplayMode(mode: DisplayModeEnum) {
    this.displayMode = mode;
  }
}
