import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PayPal } from '@ionic-native/paypal/ngx';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-donation-money',
  templateUrl: './donation-money.page.html',
  styleUrls: ['./donation-money.page.scss'],
})
export class DonationMoneyPage implements OnInit {

  donation = {} as Donation

  paymentAmount: string = '0.00';
  currency: string = 'ZAR';
  currencyIcon: string = 'R';

  constructor(private router: Router,
  private paypal:PayPal,private angularfire:  AngularFirestore,
  private afAuth: AngularFireAuth
  ) {}

  ngOnInit() {
  }

  form(donation: Donation){
    const userid = this.afAuth.auth.currentUser.uid;
   
       this.angularfire.collection('donation/'+ userid +'/donations').add({
         Userid:this.afAuth.auth.currentUser.uid,
         name: donation.name,
         surname: donation.surname,
         location: donation.location,
         date: Date.now(),
         type: donation.type,
         phoneNumber: donation.phoneNumber,
         description: donation.description,
       }).then (() =>{
         this.router.navigateByUrl('paypal');
       })
   
     }
   
  back(){
    this.router.navigateByUrl('donation')
  }

}
