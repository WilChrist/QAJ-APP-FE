import { Component, OnInit, Input } from '@angular/core';
import { IAuthor } from 'src/app/shared/helpers/Interfaces';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-authors-grid',
  templateUrl: './authors-grid.component.html',
  styleUrls: ['./authors-grid.component.css']
})
export class AuthorsGridComponent implements OnInit {
  @Input() authors: IAuthor[];
  apiBaseUrl = environment.apiBaseUrl;
  constructor() { }

  ngOnInit() {
  }

}
