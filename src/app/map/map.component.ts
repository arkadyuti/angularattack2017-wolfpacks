import { Component, OnInit } from '@angular/core';

import { DataService } from '../data.service';
import { Http } from '@angular/http';
import 'rxjs/Rx';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  
  title: string = 'Map';
  zoom: number = 8;
  
  // initial center position for the map
  lat: number = 51.673858;
  lng: number = 7.815982;

  markers: any = [];

  constructor(private dataService: DataService) {

  }


  ngOnInit() {
  	// this.dataService.getLocation().then( (res) => {
   //    debugger;
   //  })
   this.dataService.getItems().then( (res) => {
     this.markers = res;
     // this.lat = res[0].lat();
     // this.lng = res[0].lng();
   });
  }

}