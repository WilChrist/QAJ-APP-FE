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
    const id = +this.route.snapshot.paramMap.get('id');
    this.quote = this.dataService.getQuoteById(id);
    if (this.quote === undefined) {
      this.navigateTo404();
    }
  }

  navigateTo404() {
    this.router.navigateByUrl('/404');
  }
}
