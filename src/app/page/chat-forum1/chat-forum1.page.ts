import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { ActionSheetController } from '@ionic/angular';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import * as firebase from 'firebase'
import { finalize } from 'rxjs/operators';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-chat-forum1',
  templateUrl: './chat-forum1.page.html',
  styleUrls: ['./chat-forum1.page.scss'],
})
export class ChatForum1Page implements OnInit {
  chatRef: any;
  message: string;
  ref: any;
  downloadURL: any;
  id: string;
  uploadState: any;
  register: FormGroup;
  key: string;

  constructor(private camera: Camera,
    public Storage: AngularFireStorage,
    public afAuth: AngularFireAuth,  private angularfire: AngularFirestore,
    public actionSheetController: ActionSheetController,private fb: FormBuilder ) {

    this.key = this.afAuth.auth.currentUser.uid;
    this.chatRef = this.angularfire.collection('chats',ref=>ref.orderBy('TimeStamp')).valueChanges();
   
   }

  ngOnInit() {
  }
  send(){
   
    if(this.message != ''){
    
      this.angularfire.collection('chats').add({
       Name: this.afAuth.auth.currentUser.displayName,
       Message: this.message,
       UserID: this.afAuth.auth.currentUser.uid,
       TimeStamp:firebase.firestore.FieldValue.serverTimestamp(),
      });
      this.message='';
    } 
 }

 upload(event) {
  const file= event.target.files[0];
   this.id = Math.random().toString(36).substring(2);
  const filepath=this.id;
  this.ref = this.Storage.ref(filepath);
  const task = this.Storage.upload(filepath, file);
  this.uploadState = task.percentageChanges();
  task.snapshotChanges().pipe(
    finalize(() => {
      this.downloadURL = this.ref.getDownloadURL().subscribe(urlfile=>{
         console.log(urlfile);
         this.angularfire.collection('chats').add({
          Name: this.afAuth.auth.currentUser.displayName,
          image:urlfile,
          UserID: this.afAuth.auth.currentUser.uid,
          TimeStamp:firebase.firestore.FieldValue.serverTimestamp(),
        });
       
        });
      })
    ).subscribe();
  }

  takePhoto() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }
    this.camera.getPicture(options).then((imageData) => {
     
     let base64Image = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
    });
  }
  
}
