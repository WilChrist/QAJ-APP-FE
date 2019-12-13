import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

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

  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    const parts = window.location.href.split('/');
    if (parts[3].length !== 2) {
      this.firstLanguage = 'en';
    } else {
      this.firstLanguage = parts[3];
    }
  }

  changeLanguage(languageCode) {
    const urls = this.router.url;
    console.log(urls);
    // languageCode === 'en' ? this.router.navigate(['/']) : this.router.navigate([`/${languageCode}/`]);
    // this.router.navigate(`languageCode === "en" ? "/" : "/" + language.code + "/"`);

    this.activatedRoute.params.subscribe(param => {
      if (languageCode === 'fr') {
        console.log(`${param.lang} is present but removed`);
        const paramValue = param.lang;
        console.log(`Url with lang is:${languageCode}${urls}`);
        this.router.navigateByUrl(`${languageCode}${urls}`);
      } else if (languageCode === 'en') {
        // console.log(this.activatedRoute.snapshot.url[0].path);
        console.log(urls);
        console.log(urls.slice(3));
        const route = urls.slice(3);
        this.router.navigateByUrl(route);
        console.log(this.activatedRoute.url[0].path);
      }
    });
  }

}
