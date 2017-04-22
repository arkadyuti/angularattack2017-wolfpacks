import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AdminModule }  from './admin/admin.module';

//Router
import { routes } from './app.router';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MapComponent } from './map/map.component';
// import { NavComponent } from './shared/navbar.component';


//Maps
import { AgmCoreModule, MapsAPILoader } from 'angular2-google-maps/core';
import { MenuComponent } from './menu/menu.component';
import { SearchComponent } from './search/search.component';
import { HomeComponent } from './home/home.component';
import { SearchResultComponent } from './search-result/search-result.component';

import { DataService } from './data.service';
import { MapSearchComponent } from './map-search/map-search.component';
import { SupplierDetailsComponent } from './supplier-details/supplier-details.component';
import { IncrementListComponent } from './increment-list/increment-list.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MapComponent,
    MenuComponent,
    SearchComponent,
    HomeComponent,
    SearchResultComponent,
    MapSearchComponent,
    SupplierDetailsComponent,
    IncrementListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AdminModule,
    AgmCoreModule.forRoot(),
    ReactiveFormsModule,
    routes,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCM4aNTzIdRr35r8aNTikBV_BPjl-C3EMA',
      libraries: ["places"]
    })
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
