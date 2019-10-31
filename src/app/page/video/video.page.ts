import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { AngularFirestore } from '@angular/fire/firestore';
import { VideoPlayer } from '@ionic-native/video-player/ngx';
import {AndroidExoplayer } from '@ionic-native/android-exoplayer/ngx'

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
 video;

  constructor(private afd: AngularFirestore, private afs: AngularFireStorage, private videoPlayer: VideoPlayer,private android:AndroidExoplayer) { }
  addVideo(vid) {
    const VideoFire = this.afd.collection('videos');
    VideoFire.add(vid).then(() => {
      alert('Successfully Added Book');
    }).catch( err => {
        alert('Error adding book: ' + err.message);
    });

    this.video = this.retreiveVideo('JvAw64bLP0.mp4')
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
  
  
  this.videoPlayer.play(this.video).then(() =>{
    console.log('video completed');
  }).catch(err => {
    console.log(err)
  });

  // this.android.show({url:'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4'})
}


}
