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
	} 
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
		this.postAddShopDataFire("shops", this.uId, this.shopInputs)
	}

	postAddShopDataFire(url, key, obj){
        const itemObservable = this.af.database.object(url+'/'+key);
        itemObservable.set(obj).catch((e)=> console.error(e.message) );
    }

}
