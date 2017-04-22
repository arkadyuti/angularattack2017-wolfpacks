import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cart-item-type',
  templateUrl: './cart-item-type.component.html',
  styleUrls: ['./cart-item-type.component.css']
})
export class CartItemTypeComponent implements OnInit {
	@Input() itemType;
	@Input() index;
	constructor() { }

	ngOnInit() {
	}
	availableItems(e, value){
        console.log(e.target.checked)
        console.log(this.index)
    }
}
