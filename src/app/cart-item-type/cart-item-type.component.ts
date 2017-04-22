import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cart-item-type',
  templateUrl: './cart-item-type.component.html',
  styleUrls: ['./cart-item-type.component.css']
})
export class CartItemTypeComponent implements OnInit {
	
	public isChecked = false;
	public cartItemTypes = {};
	
	@Input() itemType;
	@Input() index;
	@Output() targetItemType = new EventEmitter();
	
	constructor() { }

	ngOnInit() {
	}
	availableItems(e, value){
        console.log(e.target.checked)
        this.isChecked = e.target.checked;
        console.log(this.index)

        this.cartItemTypes[this.itemType] = this.isChecked;
        this.targetItemType.emit(this.cartItemTypes);
    }
}
