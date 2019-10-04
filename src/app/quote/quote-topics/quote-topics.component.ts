import { Component, OnInit, Input } from '@angular/core';
import { ITopic } from 'src/app/shared/helpers/Interfaces';


@Component({
  selector: 'app-quote-topics',
  templateUrl: './quote-topics.component.html',
  styleUrls: ['./quote-topics.component.css']
})
export class QuoteTopicsComponent implements OnInit {
  @Input() topics: ITopic[];
  constructor() { }

  ngOnInit() {
  }

}
