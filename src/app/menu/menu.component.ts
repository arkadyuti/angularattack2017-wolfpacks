import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { DataService } from '../data.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
  providers: [DataService]
})
export class MenuComponent implements OnInit {
  @Input() listOfStores;
  menuItems: Array<Object> = [];


  @Output()
  shopDetail = new EventEmitter();

  constructor(public dataService: DataService) { }

  ngOnInit() {

  }

  showItems(e, object) {
  	// e.preventDefault();
  	this.shopDetail.emit(object);
  }

}
