import { Component, OnInit, DoCheck } from '@angular/core';
import { DataService } from '../../core/data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements DoCheck {
	public cartList: any = [];
	public count: number;
  constructor(private dataService: DataService) { }

  ngDoCheck() {
  	// this.cartList = this.dataService.getCartItems();

  	this.count = this.dataService.getTotalCartItems();

 //  	if(this.cartList.length > 0) {
	//   	this.count = this.cartList.reduce( (a, b) => a.qty + b.qty);
	// }

  }

}
