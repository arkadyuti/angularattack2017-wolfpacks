import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../../core/data.service';

@Component({
  selector: 'app-cart-popup',
  templateUrl: './cart-popup.component.html',
  styleUrls: ['./cart-popup.component.css']
})
export class CartPopupComponent implements OnInit {
	@Input() visiblity;
	public alterDisplay = "displayNone";
	public toggleDisplay = false;

	public products = [];


	constructor(private dataService: DataService) {

	}
	ngOnChanges(){
		if(this.toggleDisplay || this.visiblity){
			this.alterDisplay = "displayVisible"
			this.toggleDisplay = false
		}
		else{
			this.alterDisplay = "displayNone"
		}

		this.products = this.dataService.getCartItems();
		// this.visiblity ? this.alterDisplay = "displayVisible" : "displayNone";
	}

	getTotal(items) {
		let sum = 0;
		items.map( (res) => {
			sum += (res.price * res.qty);
		})
		return sum;
	}
	handlePopup(){
		this.alterDisplay = "displayNone"
		this.visiblity = false;
		this.toggleDisplay = true;
	}
	ngOnInit() {
		this.products = this.dataService.getCartItems();
		// this.toggleDisplay = this.visiblity
	}
  	
}
