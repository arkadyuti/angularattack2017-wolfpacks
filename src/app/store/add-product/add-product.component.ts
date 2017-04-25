import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';

@Component({
  selector: 'app-product-component',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
	product = {} 
	uId : any;

	constructor(private af: AngularFire, private router: Router){
		var self = this;
		// af.auth.logout()
     	af.auth.subscribe(user => {
     		console.log(user)
     		this.uId = user.uid;
            if(!user){
               self.router.navigate(['/login']);
            }
        });
	}

	ngOnInit() {

	}
	handleAddProductClick(e){
		this.postAddProductDataFire("shops", this.uId, this.product);
    this.router.navigate(['/userprofile']);
	}
	postAddProductDataFire(url, key, obj){
        const itemObservable = this.af.database.list(url+'/'+key+'/products');
        itemObservable.push(obj).catch((e)=> console.error(e.message) );
    }
    cancel(){
      this.router.navigate(['/userprofile'])
    }

}
