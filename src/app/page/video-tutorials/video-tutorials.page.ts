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
    private alertCtrl:AlertController,
    private router: Router,
    ) { }
 ngOnInit(){}

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
      }, {
        text: 'Watch Video',
        role:'watch',
        cssClass:'dark',
        handler: (data) => {
      // 
          window.open('https://youtu.be/MiB1g1kbzXg');
        }
      }
 
      
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
      }, {
        text: 'Watch Video',
        role:'watch',
        cssClass:'dark',
        handler: (data) => {
          window.open('https://youtu.be/tOluxtc3Cpw');
        }
      }
 
      
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
      }, {
        text: 'Watch Video',
        role:'watch',
        cssClass:'dark',
        handler: (data) => {
          window.open('https://youtu.be/ldk_WE74gyY');
        }
      }
 
      
    ]
  });
  await alert.present();
}
}
