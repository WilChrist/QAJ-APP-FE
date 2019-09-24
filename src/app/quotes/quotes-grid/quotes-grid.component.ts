import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-quotes-grid',
  templateUrl: './quotes-grid.component.html',
  styleUrls: ['./quotes-grid.component.css']
})
export class QuotesGridComponent implements OnInit {
  @Input() quotes: any;

  constructor() { }

  ngOnInit() {
  }

}
