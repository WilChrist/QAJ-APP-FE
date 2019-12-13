import { ActivatedRoute } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class LanguageToggleService {
  languageCode;
  constructor(private activatedRoute: ActivatedRoute) { }

  changeLanguageCode(languageCode) {
    if (languageCode === 'en') {
      this.languageCode = undefined;
    } else if (languageCode !== 'en') {
      this.languageCode = languageCode;
    }

    // console.log(this.languageCode);
  }
}
