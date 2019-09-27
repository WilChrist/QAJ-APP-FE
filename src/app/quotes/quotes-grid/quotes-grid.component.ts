import { Component, OnInit, Input } from '@angular/core';
import { IQuote } from '../quotes.component';

@Component({
  selector: 'app-quotes-grid',
  templateUrl: './quotes-grid.component.html',
  styleUrls: ['./quotes-grid.component.css']
})
export class QuotesGridComponent implements OnInit {
  @Input() quotes: IQuote[];

  constructor() { }

  ngOnInit() {
  }

}
