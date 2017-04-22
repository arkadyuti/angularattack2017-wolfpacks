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
        this.Items = res.json();
        return res.json();
    })
  }

  setLocation(obj) {
    this.location = obj;
  }

  getLocation() {
    return this.location;
  }

  getItems() {
    return new Promise( (resolve, reject) => {
      let abc = [{
        "lat": 52,
        "lng": 60,
        "label": "C",
        "draggable": false,
        "title": "XYZ Water Supply",
        "availableItems": ["Can Water"]
      },
      {
        "lat": 70,
        "lng": 50,
        "label": "C",
        "draggable": false,
        "title": "ABC Water Supply",
        "availableItems": ["Can Water"]
      }]
      resolve(abc);
    })
  }

}
