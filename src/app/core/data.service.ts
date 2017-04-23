import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
// import { Observable } from 'rxjs/observable';
// import 'rxjs/Rx';

@Injectable()
export class DataService {
  location: any;
  formatted_address: string;
  Items: any = [];
  Cart: any = [];
  constructor(private http : Http) {

  }

  fetchData() {
    return this.http.get('./data/dbms.json').map( (res) => {
        this.Items = res.json();
        return true;
    })
  }

  setLocation(obj) {
    this.location = obj;
  }

  getLocation() {
    return this.location;
  }

  getItems(): any {
    return new Promise( (resolve, reject) => {
      let lowLatValue = this.location.lat - 0.3;
      let highLatValue = this.location.lat + 0.3;
      let lowLngValue = this.location.lng - 0.3;
      let highLngValue = this.location.lng + 0.3;
      let availableItems = this.Items.availableStores.filter( (key) => {
          if(key.lat > lowLatValue && key.lat < highLatValue && key.lng > lowLngValue && key.lng < highLngValue) {
            return key;
          }
      })
      resolve(availableItems);
    })
  }

  setFormattedAddress(address) {
    this.formatted_address = address;
  }

  getFormattedAddress() {
    return this.formatted_address
  }

  addToCart(item) {
    if(item.qty != 0) {
      if(this.Cart.length > 0) {
        this.Cart.map( (res, i) => {
          if(res.name === item.name) {
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
// interface Options {
//   id: string,
//   lat: number,
//   lng: number,
//   label: string,
//   draggable: boolean,
//   company: string,
//   prefferedDeliveryTime: Array<string>,
//   availableItems: Array<string>,
//   brands: Array<string>,
//   officialEmail: string,
//   contactPhone: Array<string>,
//   contactName: string,
//   city: string,
//   address: string
// }
