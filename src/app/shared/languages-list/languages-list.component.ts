import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

export interface ILanguage {
  id: number;
  name: string;
}

@Component({
  selector: 'app-languages-list',
  templateUrl: './languages-list.component.html',
  styleUrls: ['./languages-list.component.css']
})
export class LanguagesListComponent implements OnInit {
  @Input() languages: ILanguage[];
  languagesSelect = new FormControl();

  constructor() { }

  ngOnInit() {
  }

}
