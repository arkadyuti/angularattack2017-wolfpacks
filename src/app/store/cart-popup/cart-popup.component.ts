import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cart-popup',
  templateUrl: './cart-popup.component.html',
  styleUrls: ['./cart-popup.component.css']
})
export class CartPopupComponent implements OnInit {
	@Input() visiblity;
	public alterDisplay = "displayNone";
	public toggleDisplay = false;


	constructor() {

	}
	ngOnChanges(){
		if(this.toggleDisplay || this.visiblity){
			this.alterDisplay = "displayVisible"
			this.toggleDisplay = false
		}
		else{
			this.alterDisplay = "displayNone"
		}
		// this.visiblity ? this.alterDisplay = "displayVisible" : "displayNone";
	}
	handlePopup(){
		this.alterDisplay = "displayNone"
		this.visiblity = false;
		this.toggleDisplay = true;
	}
	ngOnInit() {
		// this.toggleDisplay = this.visiblity
	}
  

}
