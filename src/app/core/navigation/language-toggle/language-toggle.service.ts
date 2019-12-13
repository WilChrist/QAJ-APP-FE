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
        this.languageCode = undefined;
      } else {
        this.languageCode = param.lang;
      }
    });
  }
}
