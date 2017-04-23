import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
	public cartList: any = [];
  constructor(private dataService: DataService) { }

  ngOnInit() {
  	this.cartList = this.dataService.getCartItems();
  }

}
