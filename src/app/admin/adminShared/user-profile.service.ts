import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { User } from '../adminShared/user';

@Injectable()

export class userProfileService {

    createPost(post: User){
        let storageRef = firebase.storage().ref();
        storageRef.child(`images/${post.imgTitle}`).putString(post.img, 'base64')
            .then((snapshot) => { 
                let url = snapshot.metadata.downloadURLs[0];
                let dbRef = firebase.database().ref('userProfile/');
                let newPost = dbRef.push();
                newPost.set ({
                    name: post.name,
                    address: post.address,
                    phonenumber:post.phonenumber,
                    imgTitle: post.imgTitle,
                    img: url,
                    id: newPost.key
                });         
            })
            .catch ((error)=>{
                alert(`failed upload: ${error}`);
            });            
    }

    editPost(update: User){
        let dbRef = firebase.database().ref('userProfile/').child(update.id)
            .update({
                address: update.address,
                phonenumber: update.phonenumber
            });
        alert('post updated');       
    }

    removePost(deletePost: User){
        let dbRef = firebase.database().ref('userProfile/').child(deletePost.id).remove();
        alert('post deleted');
        let imageRef = firebase.storage().ref().child(`images/${deletePost.imgTitle}`)
            .delete()
                .then(function() {
                    alert(`${deletePost.imgTitle} was deleted from Storage`);
                }).catch(function(error) {
                    alert(`Error - Unable to delete ${deletePost.imgTitle}`);
                });
    }


}