import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-video-tutorials',
  templateUrl: './video-tutorials.page.html',
  styleUrls: ['./video-tutorials.page.scss'],
})
export class VideoTutorialsPage implements OnInit {

  ref;
  task;
  uploadProgress;
 downloadURL;

  constructor(private afd: AngularFirestore, private afs: AngularFireStorage) { }
  addVideo(vid) {
    const VideoFire = this.afd.collection('videos');
    VideoFire.add(vid).then(() => {
      alert('Successfully Added Book');
    }).catch( err => {
        alert('Error adding book: ' + err.message);
    });
  }
   ngOnInit(){}

  uploadVideo(event) {
    const VideoName = this.makeid(10) + '.MKV';
  // this.afs.upload('/upload/to/this-path', event.target.files[0]);
 // const randomId = Math.random().toString(36).substring(2);
    const file = event.target.files[0];
    const filePath = 'uploads/videos/' + VideoName;
    const ref = this.afs.ref(filePath);
    const task = ref.put(file);
    // vid.url = VideoName;
    // this.addVideo(vid);
    return this.uploadProgress = task.percentageChanges();
 }
  retreiveVideo(video) {
   console.log(video);
   const ref = this.afs.ref('uploads/videos/' + video);
   return ref.getDownloadURL();
 }
 makeid(length) {
   let result           = '';
   const characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
   const charactersLength = characters.length;
   for (  let i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
   }
   return result;
}
}
