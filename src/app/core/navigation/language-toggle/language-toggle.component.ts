import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-language-toggle',
  templateUrl: './language-toggle.component.html',
  styleUrls: ['./language-toggle.component.css']
})
export class LanguageToggleComponent implements OnInit, AfterViewInit {
  languages = [
    {name: 'En', code: 'en'},
    {name: 'Fr', code: 'fr'}
  ];

  firstLanguage;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    setTimeout(() => {
    this.firstLanguage = window.location.href.split('/')[3];
    }, 1000);
  }

}
