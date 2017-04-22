import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-supplier-details',
  templateUrl: './supplier-details.component.html',
  styleUrls: ['./supplier-details.component.css']
})
export class SupplierDetailsComponent implements OnInit {
    @Input() listOfStores;

    public listOfBrands = ["Bisleri", "Kinley", "Aqua", "Nestle"]
    public listOfItemsType = ["Tanker Water", "Can Water"]

    public brandListCart = {};

    constructor(public dataService: DataService) { }

    handleTargetBrand(brand) {
        this.brandListCart[Object.keys(brand)[0]] = brand
        console.log(this.brandListCart)
    }

    

    ngOnInit() {
    }

    checkBtn(){
        console.log("S")
    }
    
   
}
