import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AuthService } from './service/auth.service';

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
      title: 'Chat Forums',
      icon: 'chatbubbles',
      subPages: [
        {
        title: 'Maternal Issue', 
        url: '/chat-forum1',
        icon:'martenal', 
      },
      {
         title: 'Mammography',
         url: '/chat-forum2',
         icon:'chatbubbles',
         },
         {
         title: 'Cancer Issue',
         url: '/chat-forum',
         icon:'chatbubbles',
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
      title: 'Period tracker',
      url: '/pariod-tracker',
      icon: 'analytics'
    },
    // {
    //   title: 'Logout',
    //   url: '/logout',
    //   icon: 'log-out'
    // },

  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar, 
    private authService: AuthService,
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  log() {
    this.authService.logout();
  }
}
