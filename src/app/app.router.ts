import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/adminComponent/admin.component';

import { SignUpComponent }    from './admin/signUp/sign-up.component';

import { LoginComponent }    from './admin/login/login.component';
import { AppComponent } from './app.component';

import { HomeComponent } from './home/home.component';
import { SearchResultComponent } from './search-result/search-result.component';

export const router: Routes = [
	{ path:'', redirectTo: 'search-result', pathMatch: 'full'},
	{ path:'home', component: HomeComponent},
	{ path:'search-result', component: SearchResultComponent},
	{ path:'login', component: LoginComponent},
	{ path:'signup', component: SignUpComponent}

]

export const routes: ModuleWithProviders = RouterModule.forRoot(router);



