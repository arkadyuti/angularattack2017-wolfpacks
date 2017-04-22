import { Component } from '@angular/core';
import {UserService} from '../adminShared/user.service';
import { Router } from '@angular/router';
import { AngularFire, AuthProviders } from 'angularfire2';


@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
 })
 
export class LoginComponent { 
  email: string;
  password1: string;
  
  constructor(private userSVC: UserService, private router: Router, public af: AngularFire){
     
  }

  login(){
    this.userSVC.login(this.email, this.password1);
    this.userSVC.verifyUser();
  }

  signup(){
    this.af.auth.login({
    provider: AuthProviders.Google
  });
  this.userSVC.verifyUser();
  }

  cancel(){
    this.router.navigate(['']);
  }
}