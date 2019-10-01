import { Component, OnInit, Input } from '@angular/core';
import { ITopic } from '../topics.component';

@Component({
  selector: 'app-topics-grid',
  templateUrl: './topics-grid.component.html',
  styleUrls: ['./topics-grid.component.css']
})
export class TopicsGridComponent implements OnInit {
  @Input() topics: ITopic[];
  constructor() { }

  ngOnInit() {
  }

}
