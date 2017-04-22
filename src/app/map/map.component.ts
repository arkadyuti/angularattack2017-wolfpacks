import { Component, Input } from '@angular/core';

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
  title: string = 'Map';
  zoom: number = 8;

  // initial center position for the map
  lat: number = 51.673858;
  lng: number = 7.815982;

}
