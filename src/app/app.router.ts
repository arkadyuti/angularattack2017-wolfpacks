import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { SignUpComponent } from './user/signUp/sign-up.component';
import { LoginComponent } from './user/login/login.component';
import { CartPageComponent } from './store/cart-page/cart-page.component';
import { HomeComponent } from './pages/home/home.component';
import { SearchResultComponent } from './store/search-result/search-result.component';
import { userProfileComponent } from './user/userProfile/userprofile.component';
import { UserService } from './user/userShared/user.service';

export const router: Routes = [
	{ path:'', redirectTo: 'home', pathMatch: 'full'},
	{ path:'home', component: HomeComponent},
	{ path:'search-result', component: SearchResultComponent},
	{ path:'login', component: LoginComponent},
	{ path:'signup', component: SignUpComponent},
	{ path: 'userprofile', component: userProfileComponent },
	{ path: 'search-result/cart-page', component: CartPageComponent }

]

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
