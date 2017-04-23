import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-each-shop',
  templateUrl: './each-shop.component.html',
  styleUrls: ['./each-shop.component.css']
})
export class EachShopComponent implements OnInit {
@Input() shop;
  constructor() { }

  ngOnInit() {
    console.log("in init")
  }

}
