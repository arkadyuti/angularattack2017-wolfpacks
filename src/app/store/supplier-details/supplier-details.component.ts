import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { DataService } from 'app/core/data.service';
import { AngularFire } from 'angularfire2';



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
    public item : any;

    constructor(private af: AngularFire, public dataService: DataService) {
        let obj = [{
                "quantity": "5",
                "brands": [
                    "Bisleri",
                    "Fiji Water",
                    "Pepsi Co."
                ],
                "company": "PQR Water Supply",
                "companyID": "store2",
                "deliveryTime": "7:30PM",
                "dateStamp": 1452488445471
            },
            {
                "quantity": "1",
                "brands": [
                    "Bisleri"
                ],
                "company": "PQR Water Supply",
                "companyID": "store2",
                "deliveryTime": "7:30PM",
                "dateStamp": 1452488455471
            }
        ]
        this.postCartDataFire("/cart", "112233445", obj)
        // this.getCartDataFire();
    }
    postCartDataFire(url, key, obj){
        const itemObservable = this.af.database.object('/item/'+key);
        itemObservable.set(obj).catch((e)=> console.error(e.message) );
    }
    getCartDataFire(){
        // console.log("test fire");
        this.item = this.af.database.object('/cart', { preserveSnapshot: true });
        this.item.subscribe(snapshot => {
          console.log(snapshot.key)
          console.log(snapshot.val())
        });
    }
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
