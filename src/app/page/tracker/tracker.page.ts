import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';

import * as moment from 'moment';
import { AlertController } from '@ionic/angular';
import { async } from '@angular/core/testing';

@Component({
  selector: 'app-tracker',
  templateUrl: './tracker.page.html',
  styleUrls: ['./tracker.page.scss'],
})
export class TrackerPage implements OnInit {

  periods = {} as Periods;

  

  constructor(private angularfire: AngularFirestore, private afAuth: AngularFireAuth, public alertController: AlertController) { }

  ngOnInit() {
  }

   async tracker(periods: Periods){
    const userid = this.afAuth.auth.currentUser.uid;

    this.angularfire.collection('tracker').doc(this.afAuth.auth.currentUser.uid).set({
      lastDate: this.periods.lastDate,
      periodCycleDays: this.periods.PeriodCycleDays,
      bleedingDays: this.periods.bleedingDays,
      fertilePhaseStart: this.periods.PeriodCycleDays - 20,
      fertilePhaseEnd: this.periods.PeriodCycleDays - 11,
      ovulation: (this.periods.fertilePhaseStart - 1) + (this.periods.fertilePhaseEnd - this.periods.fertilePhaseStart)/2,
      periodStart: this.periods.periodStartDate = new Date(moment().add(this.periods.PeriodCycleDays, 'days').calendar())
      
    });
    console.log("Your next periods start on: "+ this.periods.periodStartDate)

    const alert = await this.alertController.create({
      header: 'Calendar',
      message: "Your next periods start on: "+ this.periods.periodStartDate,
      buttons: ['Ok']
    });

    await alert.present();

  }



}
