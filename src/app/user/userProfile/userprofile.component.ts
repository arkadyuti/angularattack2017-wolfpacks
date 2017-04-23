import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import {UserService} from '../userShared/user.service';
import { userProfileService } from '../userShared/user-profile.service';
import { User } from '../userShared/user';

@Component({
	templateUrl: './userprofile.component.html',
	styleUrls:['./userprofile.component.css']
})

export class userProfileComponent implements OnInit {

	 theUser: string;
	 menuChoice: string;
	 userData: Object = {};
	 formDisplay: boolean = true;
	 name: string = "";
     phonenumber: number =0;
     address: string = "";

	 constructor(){
	    firebase.initializeApp({
         apiKey: "AIzaSyDJR3ZTCpei287mU7DzviEC6q34mVvRrNk",
         authDomain: "angularattack-b35c6.firebaseapp.com",
         databaseURL: "https://angularattack-b35c6.firebaseio.com",
         projectId: "angularattack-b35c6",
         storageBucket: "angularattack-b35c6.appspot.com",
         messagingSenderId: "807124795822"
        })
	  this.getPost(); }
	 ngOnInit() {



	 }


	 getPost() {

	 var user = firebase.auth().currentUser;
	 firebase.auth().onAuthStateChanged(function(user) {
		  if (user) {
		    alert('User is signed in.');
		  } else {
		     alert(' No user is signed in');
		  }
		});
      alert()

	   let dbRef = firebase.database().ref('userProfile/');
		dbRef.once('value').then ((snapshot)=> {
	   		this.userData = snapshot.val();
	   		 if(!this.userData){
			   this.formDisplay = false;
			   alert(this.formDisplay)
			   }else {

			   	 let list = [] ;
			      snapshot.forEach (function (data) {
			        let item = {
			          key: data.key, //this is to get the ID, if needed
			          name: data.val ().name,
			          address: data.val ().address,
			          phonenumber:data.val().phonenumber
			        }
			        list.push (item);
			   });
			   this.userData =list[0];
	   		}
	   });


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
