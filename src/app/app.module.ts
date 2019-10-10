import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { AuthService } from './service/auth.service';
import { AngularFireAuthModule } from '@angular/fire/auth';
import * as firebase from 'firebase';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';

import { PayPal } from '@ionic-native/paypal/ngx';
import { ExampleModalPageModule } from './page/example-modal/example-modal.module';
import { AngularFirestore, AngularFirestoreModule } from '@angular/fire/firestore';

import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player/ngx';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { Camera } from '@ionic-native/camera/ngx';




const firebaseConfig = {
  apiKey: "AIzaSyC1TA8JQDneK2YCLgDNUPpGQgFwvPByeaw",
  authDomain: "womanhealth-a607a.firebaseapp.com",
  databaseURL: "https://womanhealth-a607a.firebaseio.com",
  projectId: "womanhealth-a607a",
  storageBucket: "womanhealth-a607a.appspot.com",
  messagingSenderId: "726806845953",
  appId: "1:726806845953:web:39c6eaca3f5eee076f7e00",
  measurementId: "G-J3F1H2MRRX"
};
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule,
     IonicModule.forRoot(),
      AppRoutingModule,
      AngularFireAuthModule,
      ReactiveFormsModule,
      FormsModule,
      AngularFireModule.initializeApp(firebaseConfig),
      AngularFireAuthModule,
      AngularFirestoreModule,
      AngularFireStorageModule,
      ExampleModalPageModule,
    
    ],
  providers: [
    StatusBar,
    SplashScreen,
    Camera,
    AuthService,
    PayPal,
    AngularFirestore,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
