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
    {
      title: 'Paypal for Apps',
      url: '/paypal',
      icon: 'card'
    },
    {
      title: 'Paypal for PWA',
      url: '/paypalweb',
      icon: 'ios-card'
    },
    {
      title: 'Chat-forum',
      url: '/chat-forum',
      icon: 'chatbubbles',
      subPages: [
        {
        title: 'Metenal health', 
        url: '/chat-forum1',
        icon:'ios-chatbubbles' 
      },
      {
         title: 'Mammography',
         url: '/chat-forum2',
         icon:'chatbubbles'
         },
     
     ]
    },
   
    {
      title: 'Donate to woman in need',
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
    {
      title: 'Logout',
      url: '/logout',
      icon: 'log-out'
    },
    {
      title: 'Period tracker',
      url: '/period-tracker',
      icon: 'analytics'
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
