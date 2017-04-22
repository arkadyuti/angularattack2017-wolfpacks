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
    public itemTypeCart = {};
    public allCart = {}

    constructor(public dataService: DataService) { }

    handleTargetBrand(brand) {
        this.brandListCart[Object.keys(brand)[0]] = brand[Object.keys(brand)[0]]
        this.allCart['brandListCart'] = Object.assign({}, this.brandListCart)
        console.log(this.allCart)
    }
    handleTargetItemType(itemType) {
        this.itemTypeCart[Object.keys(itemType)[0]] = itemType[Object.keys(itemType)[0]]
        // this.allCart = Object.assign({}, this.allCart, this.itemTypeCart)
        this.allCart['itemTypeCart'] = Object.assign({}, this.itemTypeCart)
        console.log(this.allCart)

    }

    

    ngOnInit() {
    }

    checkBtn(){
        console.log("S")
    }
    
   
}
