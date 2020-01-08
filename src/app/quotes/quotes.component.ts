import { Component, OnInit, Input } from '@angular/core';
import { DisplayModeEnum } from '../shared/helpers/Enums';
import { IQuote, ILanguage } from '../shared/helpers/Interfaces';
import { DataService } from './../core/services/data.service';
import { PaginatorConfigurable, SimpleError } from '../shared/helpers/Classes';

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
  paginatorConfigurable: PaginatorConfigurable;
  filterByProperty = 0;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.paginatorConfigurable = new PaginatorConfigurable();
    this.dataService.getAllQuotes().subscribe(
      (data: any) => {
        this.quotes = this.filteredQuotes !== undefined ? this.filteredQuotes : data.data;
        this.paginatorConfigurable = new PaginatorConfigurable(
          this.quotes.length,
          4,
          [4, 8, 12, 24, 48, 96]
        );
      }
    );
    this.dataService.getAllLanguages().subscribe(
      (data: any) => {
        this.languages = data.data;
        }
    );
    this.displayMode = DisplayModeEnum.Grid;
  }
  changeDisplayMode(mode: DisplayModeEnum) {
    this.displayMode = mode;
  }

  recieveSelectedLanguage(languageId) {
    this.filterByProperty = languageId;
  }
}
