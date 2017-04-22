import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
// import { Observable } from 'rxjs/observable';
// import 'rxjs/Rx';

@Injectable()
export class DataService {
  location: any;
  Items: any = [];

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
      let lowLatValue = this.location.geometry.location.lat() - 0.3;
      let highLatValue = this.location.geometry.location.lat() + 0.3;
      let lowLngValue = this.location.geometry.location.lng() - 0.3;
      let highLngValue = this.location.geometry.location.lng() + 0.3;
      let availableItems = this.Items.availableStores.filter( (key) => {
          if(key.lat > lowLatValue && key.lat < highLatValue && key.lng > lowLngValue && key.lng < highLngValue) {
            return key;
          }
      })
      resolve(availableItems);
    })
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