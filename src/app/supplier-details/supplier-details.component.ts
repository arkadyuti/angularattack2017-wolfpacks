import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-supplier-details',
  templateUrl: './supplier-details.component.html',
  styleUrls: ['./supplier-details.component.css']
})
export class SupplierDetailsComponent implements OnInit {

    constructor(public dataService: DataService) { }

    public abc = {};
    public arr = [];
    public listOfBrands = ["Bisleri", "Kinley", "Aqua", "Nestle"]
    public listOfItemsType = ["Tanker Water", "Can Water"]

    ngOnInit() {
    }


    
    
}
