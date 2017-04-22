import { Component, OnInit } from '@angular/core';
import {UserService} from '../adminShared/user.service';
import { Router } from '@angular/router';
import * as firebase from 'firebase';
import { userProfileService } from '../adminShared/user-profile.service';
import { User } from '../adminShared/user';

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

	 constructor(){ this.getPost(); }
	 ngOnInit() {



	 }


	 getPost() {

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
