import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule }   from '@angular/forms';
import { AdminComponent } from './adminComponent/admin.component';
import { AdminMenuComponent }  from './adminMenu/admin-menu.component';
import { LoginComponent }    from './login/login.component';
import { SignUpComponent }    from './signUp/sign-up.component';
import { UserService } from './adminShared/user.service';
import { TruncatePipe } from './adminShared/trunc.pipe';
import { AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';
import { userProfileComponent }    from './userProfile/userprofile.component';


const myFirebaseConfig = {
  
         apiKey: "AIzaSyDJR3ZTCpei287mU7DzviEC6q34mVvRrNk",
         authDomain: "angularattack-b35c6.firebaseapp.com",
         databaseURL: "https://angularattack-b35c6.firebaseio.com",
         projectId: "angularattack-b35c6",
         storageBucket: "angularattack-b35c6.appspot.com",
         messagingSenderId: "807124795822"
        
};

const myFirebaseAuthConfig = {
  provider: AuthProviders.Google,
  method: AuthMethods.Redirect
};

const AdminRoutes: Routes = [
    { 
        path: 'admin',  
        component: AdminComponent, 
        children: [
            { path: 'login', component: LoginComponent },
            { path: 'signup', component: SignUpComponent },
            { path: '', component: AdminMenuComponent, canActivate: [UserService] }
        ]
    },
];
@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        AngularFireModule.initializeApp(myFirebaseConfig, myFirebaseAuthConfig),
        RouterModule.forChild(AdminRoutes)
    ],
    exports: [
        RouterModule,
        TruncatePipe,
        
    ],
    declarations: [
        AdminComponent,
        AdminMenuComponent,
        LoginComponent,
        SignUpComponent,
        TruncatePipe,
        userProfileComponent
        
    ],
    providers: [
        UserService
    ]
})
export class AdminModule {}

