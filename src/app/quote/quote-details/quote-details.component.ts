import { Component, OnInit, Input } from '@angular/core';
import { IQuote } from 'src/app/quotes/quotes.component';
import { ILanguage } from 'src/app/shared/languages-list/languages-list.component';



@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.component.html',
  styleUrls: ['./quote-details.component.css']
})
export class QuoteDetailsComponent implements OnInit {
  @Input() quote: IQuote;
  constructor() { }

  ngOnInit() {
  }
}
