import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {UserService} from '../userShared/user.service';


@Component({
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})

export class SignUpComponent {
  email: string;
  password1: string;
  password2: string;
  passwordFail: boolean = false;

  constructor(private userSVC: UserService, private router: Router){}

  signUp(){
    if (this.password1 !== this.password2) {
      this.passwordFail = true;
    } else {
      this.passwordFail = false;
      this.userSVC.register(this.email, this.password1);
      this.userSVC.verifyUser();
    }
  }

  cancel(){
    this.router.navigate(['/admin/login']);
  }
  
 }
