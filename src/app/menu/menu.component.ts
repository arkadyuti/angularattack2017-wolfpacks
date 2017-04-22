import { Component, OnInit, Input } from '@angular/core';

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
  constructor(public dataService: DataService) { }

  ngOnInit() {

  }

}
