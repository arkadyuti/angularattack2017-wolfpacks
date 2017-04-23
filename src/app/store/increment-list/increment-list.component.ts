import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DataService } from '../../core/data.service';

@Component({
  selector: 'app-increment-list',
  templateUrl: './increment-list.component.html',
  styleUrls: ['./increment-list.component.css']
})
export class IncrementListComponent implements OnInit {
    public name1 = "0";
    public cartBrands = {};

	@Input() brand;
    @Input() index;

    @Output() targetBrand = new EventEmitter();

	constructor(
        public dataService: DataService
    ) {
        
    }
	
	ngOnInit() {
	}

	incrementalValue(e){
        this.cartBrands[this.brand] = e.target.value;
        this.targetBrand.emit(this.cartBrands);
	}
  	changeValue(e){
        let val = e.target.parentElement.children[1].value;
        
        if(e.target.classList.contains("inc")){
            val++;
            this.name1=  val;
        }
        else{
            if(val<1){
                return
            }
            val--
            this.name1=  val;
        }
        this.brand['qty'] = this.name1;
        this.dataService.addToCart(this.brand);
    }

}
