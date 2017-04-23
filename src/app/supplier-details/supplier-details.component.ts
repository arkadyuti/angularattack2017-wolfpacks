import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-supplier-details',
  templateUrl: './supplier-details.component.html',
  styleUrls: ['./supplier-details.component.css']
})
export class SupplierDetailsComponent implements OnInit {
    @Input() listOfStores;
    @Input() shopData ;

    @Output() 
    backToList = new EventEmitter();

    public listOfBrands = [];
    public listOfItemsType = [];

    public brandListCart = {};
    public itemTypeCart = {};
    public allCart = {};
    public noItem: boolean = false;

    constructor(public dataService: DataService) { }

    handleTargetBrand(brand) {
        this.brandListCart[Object.keys(brand)[0]] = brand[Object.keys(brand)[0]]
        this.allCart['brandListCart'] = Object.assign({}, this.brandListCart)
    }
    handleTargetItemType(itemType) {
        this.itemTypeCart[Object.keys(itemType)[0]] = itemType[Object.keys(itemType)[0]]
        // this.allCart = Object.assign({}, this.allCart, this.itemTypeCart)
        this.allCart['itemTypeCart'] = Object.assign({}, this.itemTypeCart)

    }



    ngOnInit() {
        this.listOfBrands = this.shopData.brands;
        this.listOfItemsType = this.shopData.availableItems;
    }

    checkBtn(e){
        if(Object.keys(this.allCart).length > 0) {
            let CartItems = this.dataService.getCartItems();
            this.dataService.addToCart(this.allCart);
        } else {
            this.noItem = true;
            setTimeout( () => {
                this.noItem = false;
            }, 1000);
        }
    }

    moveToList() {
        this.backToList.emit(true);
    }


}
