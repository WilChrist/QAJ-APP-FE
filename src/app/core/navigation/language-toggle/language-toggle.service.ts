import { ActivatedRoute } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class LanguageToggleService {
  languageCode;
  constructor(private activatedRoute: ActivatedRoute) { }

  changeLanguageCode() {
    this.activatedRoute.params.subscribe(param => {
      if (!param.lang) {
        console.log(param.lang);
        this.languageCode = undefined;
      } else {
        console.log(param.lang);
        this.languageCode = param.lang;
      }
    });

    console.log(this.languageCode);
  }
}
