import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';
@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

	shopInputs = {
		lat: "",
		lng: ""
	} ;
	product={}
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
	

	handleAddShopClick(e){
		this.postAddShopDataFire("/users", this.uId, this.shopInputs);
		this.router.navigate(['userprofile']);
	}

	postAddShopDataFire(url, key, obj){
        const itemObservable = this.af.database.object(url+'/'+key+'/shop');
        itemObservable.set(obj).catch((e)=> console.error(e.message) );

        this.handleAddProductClick()
    }
    handleAddProductClick(){
		this.postAddProductDataFire("/users/", this.uId, this.product);
    	this.router.navigate(['/userprofile']);
	}
	postAddProductDataFire(url, key, obj){
        const itemObservable = this.af.database.list(url+'/'+key+'/shop/product');
        itemObservable.push(obj).catch((e)=> console.error(e.message) );
    }
    cancel(){
    	this.router.navigate(['/search-result']);
    }

   
}
