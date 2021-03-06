import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DataService } from 'app/core/data.service';
import { MapsAPILoader } from 'angular2-google-maps/core';
import { CustomCheckForClosedPipe } from 'app/customCheckForClosedPipe';
import { DatePipe } from 'app/date.pipe';
@Component({
  selector: 'app-each-shop',
  templateUrl: './each-shop.component.html',
  styleUrls: ['./each-shop.component.css'],
  providers: [DataService, CustomCheckForClosedPipe, DatePipe]
})
export class EachShopComponent implements OnInit {
  timeTaken :any ="";
  location : any;
@Input() shop;
@Output() clickShop = new EventEmitter();
geoLoc:any = undefined;
  constructor(private dataService: DataService,
  private mapsAPILoader: MapsAPILoader,
  private isShopClosedPipe: CustomCheckForClosedPipe,
  private datePipe: DatePipe) {}

  ngOnInit() {
    this.location = this.dataService.getLocation();
    const shopIsClosed = this.isShopClosedPipe.transform(this.datePipe.transform(this.shop.prefferedDeliveryTime));
    if(!shopIsClosed) {
      this.mapsAPILoader.load().then(() => {
      this.geoLoc = new google.maps.Geocoder().geocode({'location':this.location}, this.geoCoderCb.bind(this));
    });
  }
  }

    geoCoderCb(results, status) {
				if(status === google.maps.GeocoderStatus.OK) {
          let userAddress = results[0].formatted_address;
          var request = {
    				origin:this.shop.address,
    				destination:userAddress,
    				travelMode: google.maps.TravelMode.DRIVING
    			};

    			new google.maps.DirectionsService().route(request, this.directionsServiceCb.bind(this));
        }
      }

        directionsServiceCb(result, status) {
    				if(status === google.maps.DirectionsStatus.OK) {
              this.timeTaken = result.routes[0].legs[0].duration.text;
    					// directionsDisplay.setDirections(result)
    				}
    			}

  showStore() {
    this.clickShop.emit(this.shop)
  }

  getColor(bool) {
    if(bool){
      return 'red';
    } else {
      return 'blue';
    }

  }

}
