import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';



@Component({
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})

export class SignUpComponent {

  email: string;
  password1: string;
  password2: string;
  passwordFail: boolean = false;
  authenticated: boolean;


  constructor( private router: Router, private af: AngularFire ){}

  signUp(){

    if (this.password1 !== this.password2) {
      this.passwordFail = true;
    } else {
      this.passwordFail = false;
      this.registerUser();
      this.login();
    }

  }
  
  login(){
     this.af.auth.login({ email: this.email, password: this.password1}).then((res) => 
     {
        if (res.provider === 4){
           this.authenticated = true;
        }
       
      });
     this.router.navigate(['/userprofile']);
  }
  registerUser(){
   let obj = {"email":this.email, "password":this.password1}
    this.postRegisterUserDataFire("/users", obj)
  }

  postRegisterUserDataFire(url, obj){
        const itemObservable = this.af.database.object(url);
        itemObservable.set(obj).catch((e)=> console.error(e.message) );
        
    }

  cancel(){
    this.router.navigate(['/home']);
  }
  
 }
