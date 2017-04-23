import { Component, OnInit, ViewChild, ElementRef, NgZone } from '@angular/core';
import { MapsAPILoader } from 'angular2-google-maps/core';
import { DataService } from '../../core/data.service';

@Component({
  selector: 'app-map-search',
  templateUrl: './map-search.component.html',
  styleUrls: ['./map-search.component.css']
})
export class MapSearchComponent implements OnInit {
  searchField: string;

  @ViewChild("mapSearch")
  public mapSearchElementRef: ElementRef;
  constructor(private dataService: DataService,
  private mapsAPILoader: MapsAPILoader,
private ngZone: NgZone) {}

  ngOnInit() {
    this.mapsAPILoader.load().then(() => {
      let address = this.dataService.getFormattedAddress();
      this.mapSearchElementRef.nativeElement.value = address;
      let autocomplete = new google.maps.places.Autocomplete(this.mapSearchElementRef.nativeElement, {
        types: ["establishment"]
      });
      autocomplete.addListener("place_changed", () => {
        this.ngZone.run(() => {
          //get the place result
          let place: google.maps.places.PlaceResult = autocomplete.getPlace();

          //verify result
          if (place.geometry === undefined || place.geometry === null) {
            return;
          }
          this.dataService.setLocation({
            lat:place.geometry.location.lat(),
            lng:place.geometry.location.lng()
          });
          this.dataService.setFormattedAddress(place.formatted_address);

        });
      });
    });
  }
}
