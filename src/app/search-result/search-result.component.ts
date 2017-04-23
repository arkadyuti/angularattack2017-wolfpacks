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
  isSearchPage : boolean = true;
  shopDetails;
  ngOnInit() {
    this.getListOfStores({lat:20});
  }

  changeCenterLocation(object) {
    this.dataService.setLocation({
      lat:object.lat,
      lng:object.lng
    });
    this.getListOfStores(object);
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

   details(shop) {
     if(shop) {
       this.isSearchPage = !this.isSearchPage;
       this.shopDetails = shop;
     }
   }

   handleBack(check) {
     this.isSearchPage = !this.isSearchPage;
   }
  }
