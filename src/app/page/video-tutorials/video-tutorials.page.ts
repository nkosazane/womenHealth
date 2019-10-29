import { VideoPage } from './../video/video.page';
import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { AngularFirestore } from '@angular/fire/firestore';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

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


  constructor(private afd: AngularFirestore,
              private afs: AngularFireStorage,
              private alertCtrl: AlertController,
    ) { }
  addVideo(vid) {
    const VideoFire = this.afd.collection('videos');
    VideoFire.add(vid).then(() => {
      alert('Successfully Added Book');
    }).catch( err => {
        alert('Error adding book: ' + err.message);
    });
  }
   ngOnInit() {}

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

async presentPrompt() {
  const alert = await this.alertCtrl.create({
   // tslint:disable-next-line:max-line-length
   message: '<strong><i>Two of the most common cancers affecting women are breast and cervical cancers. Detecting both these cancers early is key to keeping women alive and healthy.The latest global figures show that around half a million women die from cervical cancer and half a million from breast cancer each year.</i></strong>',

    buttons: [
      {
        text: 'Cancel',
        role: 'cancel',
        cssClass: 'dark',
        handler: () => {
          console.log('cancelled');
        }
      },

    ]
  });
  await alert.present();
}


async presentPrompt2() {
  const alert = await this.alertCtrl.create({
   // tslint:disable-next-line:max-line-length
   message: '<strong>Regular periods are a sign that your body is working normally.You should have regular periods unless you are pregnant, breastfeeding, postmenopausal, or have a medical condition that causes your periods to stop.<strong>Irregular, painful, or heavy periods may be signs of a serious health problem.Irregular periods also can make it harder to get your doctor can work with you to help get your periods more regular.</strong>',

    buttons: [
      {
        text: 'Cancel',
        role: 'cancel',
        cssClass: 'dark',
        handler: () => {
          console.log('cancelled');
        }
      },

    ]
  });
  await alert.present();
}
async presentPrompt3() {
  const alert = await this.alertCtrl.create({
   // tslint:disable-next-line:max-line-length
   message: ' <strong>Many women are now benefiting from massive improvements in care during pregnancy and childbirth introduced in the last century.But those benefits do not extend everywhere and in 2013, almost 300 000 women died from complications in pregnancy and childbirth. Most of these deaths could have been prevented,had access to family planning and to some quite basic services been in place</strong>',

    buttons: [
      {
        text: 'Cancel',
        role: 'cancel',
        cssClass: 'dark',
        handler: () => {
          console.log('cancelled');
        }
      },

    ]
  });
  await alert.present();
}
}
