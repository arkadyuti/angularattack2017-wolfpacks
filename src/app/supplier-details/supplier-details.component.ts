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
    public arr1 = ["Bisleri", "Kinley", "Aqua", "Nestle"]

    ngOnInit() {
    }


    availableItems(e, value){
        this.arr.push(value);
        this.abc['brands'] = this.arr;
        console.log(this.abc)
    }
    
}
