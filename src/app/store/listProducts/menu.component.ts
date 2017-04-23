import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CustomCheckForClosedPipe } from '../customCheckForClosedPipe';
import { DatePipe } from '../date.pipe'
import { DataService } from '../../core/data.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
  providers: [DataService, CustomCheckForClosedPipe, DatePipe]
})
export class MenuComponent implements OnInit {
  @Input() listOfStores;
  menuItems: Array<Object> = [];


  @Output()
  shopDetail = new EventEmitter();

  constructor(private dataService: DataService,
    private isShopClosedPipe: CustomCheckForClosedPipe,
  private datePipe: DatePipe) { }

  ngOnInit() {

  }

  showItems(e, shop) {
  	// e.preventDefault();
    const shopIsClosed = this.isShopClosedPipe.transform(this.datePipe.transform(shop.prefferedDeliveryTime));
  	!shopIsClosed && this.shopDetail.emit(shop);
  }

}
