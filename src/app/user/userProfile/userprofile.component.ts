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


	  constructor(private af: AngularFire, private router: Router){

	  	  this.item = af.database.object('userProfile/', { preserveSnapshot: true });
			this.item
			  .subscribe(snapshots =>
			   {
			    snapshots.forEach(snapshot => {
			      this.userData = snapshot.val()
			    });
			  })
		   
		   console.log(this.userData);
  		}
	 OnInit() {

	 }
	 getPost() {

	   let dbRef = this.af.database.object('/userProfile');
		


	 }

	createPost(){
		alert("create post")
        let storageRef = firebase.storage().ref();

                let dbRef = firebase.database().ref('userProfile/');
                let newPost = dbRef.push();
                newPost.set ({
                    name: this.name,
                    address: this.address,
                    phonenumber: this.phonenumber,
                    id: newPost.key
                })
            .catch ((error)=>{
                alert(`failed upload: ${error}`);
            });
    }
}
