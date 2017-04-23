import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})

export class SignUpComponent {
  email: string;
  password1: string;
  password2: string;
  passwordFail: boolean = false;

  constructor( private router: Router){}

  
  

  cancel(){
    this.router.navigate(['/admin/login']);
  }
  
 }
