import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PayPal } from '@ionic-native/paypal/ngx';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase';

@Component({
  selector: 'app-donation-money',
  templateUrl: './donation-money.page.html',
  styleUrls: ['./donation-money.page.scss'],
})
export class DonationMoneyPage implements OnInit {

  donation = {} as Donation;

  paymentAmount: string = '3.33';
  currency: string = 'USD';
  currencyIcon: string = '$';

  constructor(private router: Router,
  private paypal:PayPal,private angularfire:  AngularFirestore,
  private afAuth: AngularFireAuth
  ) {
  //   let _this = this;
  //   setTimeout(() => {
  //     // Render the PayPal button into #paypal-button-container
  //     <any>window['paypal'].Buttons({

  //       // Set up the transaction
  //       createOrder: function (data, actions) {
  //         return actions.order.create({
  //           purchase_units: [{
  //             amount: {
  //               value: _this.paymentAmount
  //             }
  //           }]
  //         });
  //       },

  //       // Finalize the transaction
  //       onApprove: function (data, actions) {
  //         return actions.order.capture()
  //           .then(function (details) {
  //             console.log(details);
  //             // Show a success message to the buyer
  //             alert('Transaction completed by ' + details.payer.name.given_name + '!');
  //           })
  //           .catch(err => {
  //             console.log(err);
  //           })
  //       }
  //     }).render('#paypal-button-container');
  //   }, 500)

    }

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
         type: donation.type
       }).then (() =>{
         this.router.navigateByUrl('paypal');
       })
   
     }
   

  back(){
    this.router.navigateByUrl('donation')
  }

}
