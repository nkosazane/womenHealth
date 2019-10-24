
import { CalendarComponent } from 'ionic2-calendar/calendar';
import { Component, ViewChild, OnInit, Inject, LOCALE_ID } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { formatDate } from '@angular/common';
import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player/ngx';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(
    private alertCtrl: AlertController,
    // private youtube: YoutubeVideoPlayer,
    private router: Router,
     @Inject(LOCALE_ID) private locale: string

  ) {}

  onlogin(){
    this.router.navigateByUrl('login');
  }

}
