import { Component, OnInit, Input } from '@angular/core';
import { DisplayModeEnum } from '../shared/helpers/Enums';
import { IQuote, ILanguage } from '../shared/helpers/Interfaces';
import { DataService } from './../core/services/data.service';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  @Input() filteredQuotes: IQuote[];
  quotes: IQuote[];
  languages: ILanguage[];
  displayMode: DisplayModeEnum;
  displayModeEnum = DisplayModeEnum;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.quotes = this.filteredQuotes !== undefined ? this.filteredQuotes : this.dataService.getAllQuotes();
    this.languages = this.dataService.getAllLanguages();
    this.displayMode = DisplayModeEnum.Grid;
  }
  changeDisplayMode(mode: DisplayModeEnum) {
    this.displayMode = mode;
  }
}
