import { Component, OnInit } from '@angular/core';
import { DisplayModeEnum } from '../shared/helpers/Enums';
import { IAuthor } from '../shared/helpers/Interfaces';
import { DataService } from '../core/services/data.service';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {
  authors: IAuthor[];
  displayMode: DisplayModeEnum;
  displayModeEnum = DisplayModeEnum;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.getAllAuthors().subscribe(
      (data: any) => this.authors = data.data,
      (error: any) => console.log(error)
    );
    this.displayMode = DisplayModeEnum.Grid;
  }

  changeDisplayMode(mode: DisplayModeEnum) {
    this.displayMode = mode;
  }
}
