import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
// import { Observable } from 'rxjs/observable';
// import 'rxjs/Rx';

@Injectable()
export class DataService {
  location: any;
  Items: Array<Object>;

  constructor(private http : Http) {

  }

  fetchData() {
    return this.http.get('./data/data.json').map( (res) => {
        return res.json();
    })
  }

  setLocation(obj) {
    this.location = obj;

  }

  getItems() {
    return new Promise( (resolve, reject) => {
      let abc = {
        "lat": this.location.lat(),
        "lng": this.location.lng(),
        "label": "C",
        "draggable": false,
        "title": "XYZ Water Supply",
        "availableItems": ["Can Water"]
      }
      resolve([abc]);
    })
  }

  // setItem(item) {
  //   console.log(item);
  // }
}
