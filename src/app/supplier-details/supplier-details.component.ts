import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-supplier-details',
  templateUrl: './supplier-details.component.html',
  styleUrls: ['./supplier-details.component.css']
})
export class SupplierDetailsComponent implements OnInit {
	@Input() listOfStores;
  constructor() { }

  ngOnInit() {
  }
  somefun(){
  	console.log("S")
  }
}
