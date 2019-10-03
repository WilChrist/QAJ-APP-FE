import { Component, OnInit, Input } from '@angular/core';
import { IAuthor } from 'src/app/authors/authors.component';

@Component({
  selector: 'app-author-details',
  templateUrl: './author-details.component.html',
  styleUrls: ['./author-details.component.css']
})
export class AuthorDetailsComponent implements OnInit {
@Input() author: IAuthor;
  constructor() { }

  ngOnInit() {
  }

}
