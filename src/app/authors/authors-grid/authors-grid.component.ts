import { Component, OnInit, Input } from '@angular/core';
import { IAuthor } from 'src/app/shared/helpers/Interfaces';

@Component({
  selector: 'app-authors-grid',
  templateUrl: './authors-grid.component.html',
  styleUrls: ['./authors-grid.component.css']
})
export class AuthorsGridComponent implements OnInit {
  @Input() authors: IAuthor[];
  constructor() { }

  ngOnInit() {
  }

}
