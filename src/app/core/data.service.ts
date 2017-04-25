import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { AngularFire } from 'angularfire2';


@Injectable()
export class DataService {
  location: any;
  formatted_address: string;
  Items: any = [];
  Cart: any = [];
  constructor(private http : Http, private af: AngularFire) {

  }

  getAnother() {
    return new Promise((resolve, reject) => {
            resolve(true);
    });
  }

  fetchData() {
      return this.http.get('https://angularattack-b35c6.firebaseio.com/.json').map((res) => {
        this.Items = res;
        return true;
      })
  }

  setLocation(obj) {
      sessionStorage.setItem('mapLocation', JSON.stringify(obj));
      this.location = obj;
  }

    getLocation() {
      let mapLocation;
      if(sessionStorage['mapLocation']){
        mapLocation = JSON.parse(sessionStorage['mapLocation']);
      }
      if(mapLocation){
            this.location = mapLocation;
            return mapLocation
        }
        else{
            return this.location;
        }
    }

  getItems(): any {
    return new Promise( (resolve, reject) => {
      let lowLatValue = this.location.lat - 0.3;
      let highLatValue = this.location.lat + 0.3;
      let lowLngValue = this.location.lng - 0.3;
      let highLngValue = this.location.lng + 0.3;
      let availableItems = citydata.availableStores.filter( (key) => {
          if(key.lat > lowLatValue && key.lat < highLatValue && key.lng > lowLngValue && key.lng < highLngValue) {
            return key;
          }
      })
      resolve(availableItems);
    })
  }

  setFormattedAddress(address) {
    sessionStorage.setItem('formatted_address', JSON.stringify(address));
    this.formatted_address = address;
  }

  getFormattedAddress() {
    let formatted_address;
    if(sessionStorage['formatted_address']){
      formatted_address = JSON.parse(sessionStorage['formatted_address']);
      this.formatted_address = formatted_address;
      return formatted_address
    }
    return this.formatted_address
  }


  addToCart(item) {
    if(item.qty != 0) {
      if(this.Cart.length > 0) {
        this.Cart.map( (res, i) => {
          if( (res.name === item.name) && (res.shopName === item.shopName)) {
            this.Cart[i] = item;
          } else {
            this.Cart.push(item);
          }
        })

      } else {
        this.Cart.push(item);
      }
    } else {
      this.Cart = this.Cart.filter( (res) => {
        return res.name != item.name;
      })
    }

  }

  getCartItems() {
    return this.Cart;
  }

  getTotalCartItems() {
    let count = 0;
    for(var key in this.Cart) {
      count += +this.Cart[key]['qty'];
    }
    return count;
  }

}
