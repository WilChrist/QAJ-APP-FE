import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-language-toggle',
  templateUrl: './language-toggle.component.html',
  styleUrls: ['./language-toggle.component.css']
})
export class LanguageToggleComponent implements OnInit {
  languages = [
    {name: 'En', code: 'en'},
    {name: 'Fr', code: 'fr'}
  ];

  firstLanguage;

  constructor(private router: Router) { }

  ngOnInit() {
    const parts = window.location.href.split('/');
    if (parts[3].length !== 2) {
      this.firstLanguage = 'en';
    } else {
      this.firstLanguage = parts[3];
    }
  }

}
