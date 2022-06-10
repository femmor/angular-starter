import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-starter';
  version = '1.0';

  constructor() {}

  ngOnInit() {
    this.displayFooterYear();
  }

  displayFooterYear() {
    let date = new Date();
    let year = date.getFullYear();
    return year;
  }
}
