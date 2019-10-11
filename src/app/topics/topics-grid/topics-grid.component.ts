import { Component, OnInit, Input } from '@angular/core';
import { ITopic } from 'src/app/shared/helpers/Interfaces';
import { PaginatorConfigurable } from 'src/app/shared/helpers/Classes';

@Component({
  selector: 'app-topics-grid',
  templateUrl: './topics-grid.component.html',
  styleUrls: ['./topics-grid.component.css']
})
export class TopicsGridComponent implements OnInit {
  @Input() topics: ITopic[];
  @Input() paginatorConfigurable: PaginatorConfigurable;
  constructor() { }

  ngOnInit() {
  }

}
