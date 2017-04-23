import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { Router } from '@angular/router';
import {UserService} from '../userShared/user.service';
import { userProfileService } from '../userShared/user-profile.service';
import { User } from '../userShared/user';
import { AngularFire, FirebaseObjectObservable } from 'angularfire2';


@Component({
	templateUrl: './userprofile.component.html',
	styleUrls:['./userprofile.component.css']
})

export class userProfileComponent  {

	 theUser: string;
	 menuChoice: string;
	 userData: Object = {};
	 formDisplay: boolean = true;
	 name: string = "";
     phonenumber: number =0;
     address: string = "";
     item: any;
     uid: any;

     constructor(public af: AngularFire,private router: Router) {
    	this.af.auth.subscribe(auth => this.uid=auth.uid);
    	this.getPost();
  	 }
	  
	 OnInit() {

	 }
	 
	 getPost() {

	   let dbRef = this.af.database.object('/users/'+this.uid, 
	   	{ preserveSnapshot: true });
	    dbRef.subscribe(snapshot => {
  			console.log(snapshot.val())
		});
	}

}
