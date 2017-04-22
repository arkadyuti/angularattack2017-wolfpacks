import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  private LOGO = require('.//vendor/img/angular2-logo-red.png');
  
  constructor() { }

  ngOnInit() {
  }

}
