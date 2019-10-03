import { Component, OnInit, Input } from '@angular/core';
import { IQuote } from 'src/app/quotes/quotes.component';

@Component({
  selector: 'app-author-quotes',
  templateUrl: './author-quotes.component.html',
  styleUrls: ['./author-quotes.component.css']
})
export class AuthorQuotesComponent implements OnInit {
  @Input() quotes: IQuote[];
  constructor() { }

  ngOnInit() {
  }

}
