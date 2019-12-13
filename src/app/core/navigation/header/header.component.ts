import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {
  languageCode;

  @Output() public sidenavToggle = new EventEmitter();

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(param => {
      if (!param.lang) {
        this.languageCode = undefined;
      } else {
        this.languageCode = param.lang;
      }
    })
  }

  public onToggleSidenav = () => {
    this.sidenavToggle.emit();
  }

}
