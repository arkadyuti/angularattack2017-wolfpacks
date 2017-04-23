import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';


@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
 })
 
export class LoginComponent { 

  email: any;
  password1: any;
  authenticated: boolean;


  constructor(private af: AngularFire, private router: Router){

  
  }
   
  userProfile(){
    this.router.navigate(['/userprofile']);
  }

  public login() {
     this.af.auth.login({ email: this.email, password: this.password1}).then((res) => 
     {
        if (res.provider === 4)
        this.authenticated = true;
      });

  }

  signup(){
    
 }

  cancel(){
    this.router.navigate(['']);
  }
}