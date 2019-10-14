import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public appPages = [
    // {
    //   title: 'Paypal for Apps',
    //   url: '/paypal',
    //   icon: 'card'
    // },
    // {
    //   title: 'Paypal for PWA',
    //   url: '/paypalweb',
    //   icon: 'ios-card'
    // },
    {
      title: 'Chat-forum',
      url: '/chat-forum',
      icon: 'chatbubbles'
    },
    {
      title: 'Donation',
      url: '/donation',
      icon: 'cash'
    },
    {
      title: 'Profile',
      url: '/profile',
      icon: 'card'
    },
    {
      title: 'Video-tutorial',
      url: '/video-tutorials',
      icon: 'videocam'
    },
  ];

 

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
