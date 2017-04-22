import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/adminComponent/admin.component';

import { SignUpComponent }    from './admin/signUp/sign-up.component';

import { LoginComponent }    from './admin/login/login.component';
import { AppComponent } from './app.component';

import { HomeComponent } from './home/home.component';
import { SearchResultComponent } from './search-result/search-result.component';
import { userProfileComponent }    from './admin/userProfile/userprofile.component';
import { UserService }    from './admin/adminShared/user.service';

export const router: Routes = [
	{ path:'', redirectTo: 'home', pathMatch: 'full'},
	{ path:'home', component: HomeComponent},
	{ path:'search-result', component: SearchResultComponent},
	{ path:'login', component: LoginComponent},
	{ path:'signup', component: SignUpComponent},
	{ path: 'userprofile', component: userProfileComponent }

]

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
