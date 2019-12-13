import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { LanguageToggleService } from './language-toggle.service';

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

  constructor(private router: Router, private activatedRoute: ActivatedRoute, public languageToggleService: LanguageToggleService) { }

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
    console.log(window.location.href);
    // languageCode === 'en' ? this.router.navigate(['/']) : this.router.navigate([`/${languageCode}/`]);
    // this.router.navigate(`languageCode === "en" ? "/" : "/" + language.code + "/"`);

    this.activatedRoute.params.subscribe(param => {
      console.log(param);
      if (languageCode === 'fr') {
        this.router.navigateByUrl(`${languageCode}${urls}`);
      } else if (languageCode === 'en') {
        const route = urls.slice(3);
        this.router.navigateByUrl(route);
      }
    });

    this.languageToggleService.changeLanguageCode(languageCode);
  }

}
