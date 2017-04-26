import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';
import { MapsAPILoader } from 'angular2-google-maps/core';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

	shopInputs = {
    lat:"",
    lng:"",
    shopName:"",
    landMark:"",
    city:"",
    state:"",
    country:"",
    zip:""
  } ;
	product={
    name:"",
    type:"",
    quantity:"",
    price:""
  }
	uId : any;
geoLoc:any = undefined;
	constructor(private af: AngularFire, private router: Router,
    private mapsAPILoader: MapsAPILoader,){
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
	location = {};
   setPosition(position){
      this.location = position.coords;
      console.log(position.coords);
      }
	ngOnInit() {
			navigator.geolocation
			 if(navigator.geolocation){
      		 navigator.geolocation.getCurrentPosition(this.setPosition.bind(this));

   		}


	}


	handleAddShopClick(e){
		this.postAddShopDataFire("/users", this.uId, this.shopInputs);
    this.postAvailableStores("/availableStores", this.uId, this.shopInputs)
    	this.router.navigate(['userprofile']);
	}

  postAvailableStores(url, key, obj) {
    const address = `${obj.landMark}, ${obj.city}, ${obj.state}, ${obj.country}`;
    this.mapsAPILoader.load().then(() => {
    this.geoLoc = new google.maps.Geocoder().geocode({'address':address}, this.geoCoderCb.bind(this));
  });
  }

  geoCoderCb(results, status) {
      if(status === google.maps.GeocoderStatus.OK) {
        const address = `${this.shopInputs.landMark}, ${this.shopInputs.city}, ${this.shopInputs.state}, ${this.shopInputs.country}`;
        let location = results[0].geometry.location;
        this.shopInputs.lat = location.lat();
        this.shopInputs.lng = location.lng();
        var dataObject ={
          address:address,
          availableItems:[this.product.type],
          brands:[{name:"Bisleri",price:20},{name:"Fiji Water",price:30}],
          city:this.shopInputs.city,
          company:this.shopInputs.shopName,
          contactName:"Avinash",
          contactPhone:[8050885563,9945742217],
          draggable:false,
          id:address,
          label:"F",
          lat:location.lat(),
          lng:location.lng(),
          officialEmail:"test@test.com",
          prefferedDeliveryTime:[
            {
               "hours":7,
               "minutes":30
            },
            {
               "hours":22,
               "minutes":30
            }
          ]
        }
        this.postAvailableStorestoFire(dataObject);
      }
    }

  postAvailableStorestoFire(dataObject) {
    const key = dataObject.address;
    const itemObservable = this.af.database.object('/availableStores/'+key);
    itemObservable.set(dataObject).catch((e)=> console.error(e.message) );
  }
	postAddShopDataFire(url, key, obj){
        const shopObservable = this.af.database.object(url+'/'+key+'/shop');
        shopObservable.set(obj).catch((e)=> console.error(e.message) );

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
    	this.router.navigate(['/userprofile'])
    }


}
