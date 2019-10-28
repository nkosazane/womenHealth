import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { AngularFirestore } from '@angular/fire/firestore';
import { VideoPlayer } from '@ionic-native/video-player/ngx';

@Component({
  selector: 'app-video',
  templateUrl: './video.page.html',
  styleUrls: ['./video.page.scss'],
})
export class VideoPage implements OnInit {

  ref;
  task;
  uploadProgress;
 downloadURL;

  constructor(private afd: AngularFirestore, private afs: AngularFireStorage, private videoPlayer: VideoPlayer) { }
  addVideo(vid) {
    const VideoFire = this.afd.collection('videos');
    VideoFire.add(vid).then(() => {
      alert('Successfully Added Book');
    }).catch( err => {
        alert('Error adding book: ' + err.message);
    });
  }
   ngOnInit(
   ){}

  uploadVideo(event) {
    const VideoName = this.makeid(10) + '.MKV';
 
    const file = event.target.files[0];
    const filePath = 'uploads/videos/' + VideoName;
    const ref = this.afs.ref(filePath);
    const task = ref.put(file);
    
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

playVideoHosted(){
  this.videoPlayer.play('https://firebasestorage.googleapis.com/v0/b/womanhealth-a607a.appspot.com/o/uploads%2Fvideos%2FsH5dhHA0fl.MKV?alt=media&token=a9e9c7b6-ec00-4bfe-a2b0-1b6b165e4d49').then(() =>{
    console.log('video completed');
  }).catch(err => {
    console.log(err)
  });
}
}
