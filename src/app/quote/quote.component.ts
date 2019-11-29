import { DataService } from './../core/services/data.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IQuote, ILanguage } from '../shared/helpers/Interfaces';


@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quote: IQuote;
  constructor(private dataService: DataService , private router: Router , private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id = +params.get('id');
      this.dataService.getQuoteById(id).subscribe(
        (data: any) => {
          this.quote = data.data;
          if (this.quote === undefined) {
            this.navigateTo404();
          }
        }
      );
    });
  }

  navigateTo404() {
    this.router.navigateByUrl('/404');
  }
}
