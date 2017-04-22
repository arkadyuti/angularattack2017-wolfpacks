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
    public name1 = "0";
    ngOnInit() {
    }

    availableItems(e, value){
        // console.log(e.target.innerText);
        this.abc['availableItems']= value;
        console.log(this.abc)
        // this.abc.select = e.target.value;
        // debugger;
        // this.dataService.setItem(e.target.innerText);
        // debugger;
    }
    brands(e, value){
        this.arr.push(value);
        this.abc['brands'] = this.arr;
        console.log(this.abc)
    }
    brandss(e, value){
        // this.arr.push(value);
        // this.abc['brands'] = this.arr;
        console.log(e.target.value)
        // debugger;
    }
    changeValue(e){
        // debugger
        let val = e.target.parentElement.children[1].value;
        
        if(e.target.classList.contains("inc")){
            val++;
            this.name1=  val;
            // e.target.parentElement.children[1].value++
        }
        else{
            if(val<1){
                return
            }
            val--
            this.name1=  val;
        }
        // debugger;
        // e.target.parentElement.children[1].value
    }
}
