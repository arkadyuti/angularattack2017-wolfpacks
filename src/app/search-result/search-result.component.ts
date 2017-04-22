import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit {

  constructor(private dataService: DataService) { }
  listOfStores : any = [];

  ngOnInit() {
    this.getListOfStores({lat:20});
  }

  getListOfStores(object) {
    this.dataService.fetchData().subscribe( (isData) => {
      if(isData) {
        this.dataService.getItems().then( (res) => {
          this.listOfStores = res;
        });
      }
    })

   }
  }
