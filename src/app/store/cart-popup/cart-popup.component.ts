import { Component, OnInit, Input } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { DataService } from '../../core/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart-popup',
  templateUrl: './cart-popup.component.html',
  styleUrls: ['./cart-popup.component.css']
})
export class CartPopupComponent implements OnInit {
  form;
  confirmPopUp: boolean = false;
  name: string;
  address: string;
	@Input() visiblity;
	public alterDisplay = "displayNone";
	public toggleDisplay : boolean = false;

	public products = [];


	constructor(private dataService: DataService,
  private formBuilder: FormBuilder,
  private router: Router) {}
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

  onSubmit(formFields) {
    this.confirmPopUp = true;
    this.name = formFields.name;
    this.address = formFields.address;
    setTimeout(()=>{
      this.confirmPopUp = false;
    }, 4000);
    sessionStorage.setItem('cartItem', '');
    this.handlePopup();
  }
	ngOnInit() {
		this.products = this.dataService.getCartItems();
		// this.toggleDisplay = this.visiblity
    this.form = this.formBuilder.group({
      name: this.formBuilder.control('', Validators.compose([
        Validators.required
      ])),
      email: this.formBuilder.control('', Validators.compose([
        Validators.required
      ])),
      mobile: this.formBuilder.control('+91', Validators.compose([
        Validators.required
      ])),
      address: this.formBuilder.control('', Validators.compose([
        Validators.required
      ])),
    });
	}

}
