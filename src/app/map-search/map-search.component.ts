import { Component, OnInit } from '@angular/core';

import { DataService } from '../data.service';

@Component({
  selector: 'app-map-search',
  templateUrl: './map-search.component.html',
  styleUrls: ['./map-search.component.css']
})
export class MapSearchComponent implements OnInit {
  searchField: string;
  constructor(private dataService: DataService) {
	  debugger;
  	let cordinates = this.dataService.getLocation();
  	this.searchField = cordinates.formatted_address;
  }

  ngOnInit() {
  	
  }

}
