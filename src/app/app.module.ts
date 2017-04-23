import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AgmCoreModule, MapsAPILoader } from 'angular2-google-maps/core';

//Router
import { routes } from './app.router';
import { AppComponent } from './app.component';
import { HeaderComponent } from './pages/header/header.component';
import { MapComponent } from './store/map/map.component';
import { LoginComponent } from './user/login/login.component';
import { SignUpComponent }    from './user/signUp/sign-up.component';
import { userProfileComponent }    from './user/userProfile/userprofile.component';
import { UserService } from './user/userShared/user.service';



//Maps
import { MenuComponent } from './store/listProducts/menu.component';
import { SearchComponent } from './store/search/search.component';
import { HomeComponent } from './pages/home/home.component';
import { SearchResultComponent } from './store/search-result/search-result.component';

import { DataService } from './core/data.service';
import { MapSearchComponent } from './store/map-search/map-search.component';
import { SupplierDetailsComponent } from './store/supplier-details/supplier-details.component';
import { IncrementListComponent } from './store/increment-list/increment-list.component';
import { CartItemTypeComponent } from './store/cart-item-type/cart-item-type.component';
import { FooterComponent } from './pages/footer/footer.component';
import { CartPageComponent } from './store/cart-page/cart-page.component';


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
    IncrementListComponent,
    CartItemTypeComponent,
    FooterComponent,
    CartPageComponent,
    LoginComponent,
    SignUpComponent,
    userProfileComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AgmCoreModule.forRoot(),
    ReactiveFormsModule,
    routes,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCM4aNTzIdRr35r8aNTikBV_BPjl-C3EMA',
      libraries: ["places"]
    })
  ],
  providers: [DataService,UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
