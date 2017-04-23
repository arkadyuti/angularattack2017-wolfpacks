import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AgmCoreModule, MapsAPILoader } from 'angular2-google-maps/core';
import { AngularFireModule } from 'angularfire2';


//Router
import { routes } from './app.router';
import { AppComponent } from './app.component';
import { HeaderComponent } from './pages/header/header.component';
import { MapComponent } from './store/map/map.component';
import { LoginComponent } from './user/login/login.component';
import { SignUpComponent }    from './user/signUp/sign-up.component';
import { userProfileComponent }    from './user/userProfile/userprofile.component';
import { UserService } from './user/userShared/user.service';
import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';


//Maps
import { MenuComponent } from './store/listProducts/menu.component';
import { SearchComponent } from './store/search/search.component';
import { HomeComponent } from './pages/home/home.component';
import { SearchResultComponent } from './store/search-result/search-result.component';
import { AddProductComponent }  from './store/add-product/add-product.component';

import { DataService } from './core/data.service';
import { MapSearchComponent } from './store/map-search/map-search.component';
import { SupplierDetailsComponent } from './store/supplier-details/supplier-details.component';
import { IncrementListComponent } from './store/increment-list/increment-list.component';
import { CartItemTypeComponent } from './store/cart-item-type/cart-item-type.component';
import { FooterComponent } from './pages/footer/footer.component';
import { CartPageComponent } from './store/cart-page/cart-page.component';
import { CartPopupComponent } from './store/cart-popup/cart-popup.component';
import { DatePipe } from 'app/date.pipe';
import { CustomCheckForClosedPipe } from 'app/customCheckForClosedPipe';
 import { isShopClosedDirective } from 'app/shopClose.directive';
import { EachShopComponent } from 'app/store/each-shop/each-shop.component';
import { ShopComponent } from './store/shop/shop.component';

 const firebaseAuthConfig = {
  provider: AuthProviders.Password,
  method: AuthMethods.Password
}
const firebaseConfig = {
       apiKey: "AIzaSyDJR3ZTCpei287mU7DzviEC6q34mVvRrNk",
         authDomain: "angularattack-b35c6.firebaseapp.com",
         databaseURL: "https://angularattack-b35c6.firebaseio.com",
         projectId: "angularattack-b35c6",
         storageBucket: "angularattack-b35c6.appspot.com",
         messagingSenderId: "807124795822"
}
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
    DatePipe,
    CustomCheckForClosedPipe,
    isShopClosedDirective,
    CartPageComponent,
    LoginComponent,
    SignUpComponent,
    userProfileComponent,
    CartPopupComponent,
    AddProductComponent,
    EachShopComponent,
    ShopComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AgmCoreModule.forRoot(),
    ReactiveFormsModule,
    routes,
    AngularFireModule.initializeApp(firebaseConfig,firebaseAuthConfig),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCM4aNTzIdRr35r8aNTikBV_BPjl-C3EMA',
      libraries: ["places"]
    })
  ],
  providers: [DataService,UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
