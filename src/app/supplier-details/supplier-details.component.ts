import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { DataService } from '../data.service';
import * as firebase from 'firebase';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
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
    items: FirebaseListObservable<any[]>;
 userData: Object = {};
    constructor(public dataService: DataService, af: AngularFire) {
        this.items = af.database.list('item/', { preserveSnapshot: true });
        let obj = {
            "12321": {
                a:1,
                b:3
            }
        }
        // this.postCart(obj);
        this.getPost();

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


    getPost() {
        var db = firebase.database();
        var ref = db.ref("cart");

        ref.on("value", function(snapshot) {
          console.log(snapshot.val());
        }, function (errorObject) {
          console.log("The read failed: " + errorObject.code);
        });


    }
    postCart(obj){
        var db = firebase.database();
        var ref = db.ref("cart");
        ref.set(obj).then(()=> console.log("done")).catch ((error)=>{
            alert(`failed upload: ${error}`);
        });
        
    }
    ngOnInit() {
        this.listOfBrands = this.shopData.brands;
        this.listOfItemsType = this.shopData.availableItems;
    }

    checkBtn(e){
        console.log(this.items)
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
