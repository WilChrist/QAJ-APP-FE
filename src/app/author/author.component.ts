import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { IQuote, IAuthor, ILanguage } from '../shared/helpers/Interfaces';
import { DataService } from './../core/services/data.service';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {
  author: IAuthor;
  quotes: IQuote[];
  constructor(private dataService: DataService, private router: Router , private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id = +params.get('id');
      this.author = this.dataService.getAuthorById(id);
      if (this.author === undefined) {
        this.navigateTo404();
      }
      this.dataService.getQuotesByAuthorId(id).subscribe(
        (data: any) => {
          this.quotes = data.data.quotes;
          this.quotes.forEach(q => q.author = this.author );
          }
      );
    });
  }
  navigateTo404() {
    this.router.navigateByUrl('/404');
  }
}
