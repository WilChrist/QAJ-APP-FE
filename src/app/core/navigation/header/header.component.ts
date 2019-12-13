import { Component, OnInit, Output, EventEmitter, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LanguageToggleService } from '../language-toggle/language-toggle.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit, AfterViewInit {

  @Output() public sidenavToggle = new EventEmitter();

  constructor(private activatedRoute: ActivatedRoute, public languageToggleService: LanguageToggleService) { }

  ngOnInit() {
  }

  ngAfterViewInit() {

  }




  public onToggleSidenav = () => {
    this.sidenavToggle.emit();
  }

}
