import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-each-shop',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
@Input() shop;
  public productName: string ="";
  public productquantity: number =0;
  public productType: string ="";
  constructor() { }

  ngOnInit() {
    console.log("in init")
  }

}
