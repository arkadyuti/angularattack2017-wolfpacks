import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-increment-list',
  templateUrl: './increment-list.component.html',
  styleUrls: ['./increment-list.component.css']
})
export class IncrementListComponent implements OnInit {
	@Input() abcd;

	constructor() { }
	public name1 = "0";

	ngOnInit() {
	}
	incrementalValue(e){
		console.log(e.target.value)
	}
  	changeValue(e){
  		console.log(this.abcd)
        // debugger
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
    }

}
