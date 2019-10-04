import { Component, OnInit, Input } from '@angular/core';
import { IQuote } from 'src/app/shared/helpers/Interfaces';



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
