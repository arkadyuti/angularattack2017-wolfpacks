import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

import { DataService } from '../data.service';
import { Http } from '@angular/http';
import 'rxjs/Rx';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent {
  iconUrl = "assets/rain.png";
  @Input() listOfStores;
  @Output() centerChange = new EventEmitter();
  title: string = 'Map';
  zoom: number = 12;

  // initial center position for the map
  lat: number;
  lng: number;

  constructor (private dataService: DataService) {}
  onChange(event) {
    this.centerChange.emit(event);
  }
  ngOnInit() {
  	let cordinates = this.dataService.getLocation();
  	this.lat = cordinates.geometry.location.lat();
  	this.lng = cordinates.geometry.location.lng();
  }
}
