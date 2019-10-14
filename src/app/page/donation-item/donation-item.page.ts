import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import * as firebase from 'firebase';

@Component({
  selector: 'app-donation-item',
  templateUrl: './donation-item.page.html',
  styleUrls: ['./donation-item.page.scss'],
})
export class DonationItemPage implements OnInit {

  donation = {} as Donation;

  constructor(private angularfire:  AngularFirestore, private router: Router,
    private afAuth: AngularFireAuth) { }

  ngOnInit() {
  }
  
  form(donation: Donation){
 const userid = this.afAuth.auth.currentUser.uid;

    this.angularfire.collection('donation/donators/'+userid).add({
      Userid:this.afAuth.auth.currentUser.uid,
      name: donation.name,
      surname: donation.surname,
      location: donation.location,
      TimeStamp:firebase.firestore.FieldValue.serverTimestamp(),
      type: donation.type
    }).then (() =>{
      this.router.navigateByUrl('donation');
    })

  }

}
