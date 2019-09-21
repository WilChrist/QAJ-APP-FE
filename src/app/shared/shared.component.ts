import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shared',
  template: `
    <p>
      shared works!
    </p>
  `,
  styles: []
})
export class SharedComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
