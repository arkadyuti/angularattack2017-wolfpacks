import { Injectable } from '@angular/core';
import {
    CanActivate,
    Router,
    ActivatedRouteSnapshot,
    RouterStateSnapshot
} from '@angular/router';
import * as firebase from 'firebase';
import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';

@Injectable()
export class UserService implements CanActivate {
    userLoggedIn: boolean = false;
    loggedInUser: string;
    authUser: any;

    constructor( private router: Router ) {
         firebase.initializeApp({
         apiKey: "AIzaSyDJR3ZTCpei287mU7DzviEC6q34mVvRrNk",
         authDomain: "angularattack-b35c6.firebaseapp.com",
         databaseURL: "https://angularattack-b35c6.firebaseio.com",
         projectId: "angularattack-b35c6",
         storageBucket: "angularattack-b35c6.appspot.com",
         messagingSenderId: "807124795822"
        })
     }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        let url: string = state.url;
        return this.verifyLogin(url);
    }

    verifyLogin(url: string): boolean {
        if (this.userLoggedIn) { return true; }

        this.router.navigate(['/userprofile']);
        return false;
    }

    register(email: string, password: string){
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .catch(function(error) {
                alert(`${error.message} Please Try Again!`);
        });
    }

    verifyUser() {
        this.authUser = firebase.auth().currentUser;
        if (this.authUser) {
            this.router.navigate(['/userprofile']);
            this.loggedInUser = this.authUser.email;
            this.userLoggedIn = true;
            
        }
        
    }

    login(loginEmail: string, loginPassword: string) {

        firebase.auth().signInWithEmailAndPassword(loginEmail, loginPassword).then(function() {
             
        }).catch(function(error) {
                
                alert(`${error.message} Unable to login. Try again!`);
        });
    }

    

    logout(){
        this.userLoggedIn = false;
        firebase.auth().signOut().then(function() {
            alert(`Logged Out!`);

        }, function(error) {
            alert(`${error.message} Unable to logout. Try again!`);
        });
    }

}
