import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ILanguage } from '../helpers/Interfaces';


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
