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

  constructor( private router: Router, private af: AngularFire ){}

  signUp(){

    if (this.password1 !== this.password2) {
      this.passwordFail = true;
    } else {
      this.passwordFail = false;
      this.registerUser();
    }

  }
  
  registerUser(){
   let obj = {"email":this.email, "password":this.password1}
    this.postRegisterUserDataFire("/users", obj)
  }

  postRegisterUserDataFire(url, obj){
        const itemObservable = this.af.database.list(url);
        itemObservable.push(obj).catch((e)=> console.error(e.message) );
        this.router.navigate(['/userprofile']);
    }

  cancel(){
    this.router.navigate(['/admin/login']);
  }
  
 }
