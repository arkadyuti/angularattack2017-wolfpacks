import { Component, OnInit } from '@angular/core';
import { DataService } from '../../core/data.service';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit {
	public products = [];
  constructor(public dataService: DataService) { }

  ngOnInit() {
  	this.products = this.dataService.getCartItems();
  }

}
