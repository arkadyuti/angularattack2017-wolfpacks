import { Component } from '@angular/core';
import { Router } from '@angular/router';
import * as firebase from 'firebase';
import {UserService} from '../userShared/user.service';


@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
 })
 
export class LoginComponent { 
  email: string;
  password1: string;
  
  constructor(private userSVC: UserService, private router: Router){
      var user = firebase.auth().currentUser;
      var self = this;
       firebase.auth().onAuthStateChanged(function(user) {
          if (user) {
            self.router.navigate(['/userprofile']);
          } else {
             alert(' No user is signed in');
          }
        });
  }

  userProfile(){
    this.router.navigate(['/userprofile']);
  }

  login(){
    this.userSVC.login(this.email, this.password1);
    this.userSVC.verifyUser();
  }

  signup(){
    
  this.userSVC.verifyUser();
  }

  cancel(){
    this.router.navigate(['']);
  }
}