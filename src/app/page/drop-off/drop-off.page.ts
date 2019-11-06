import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-drop-off',
  templateUrl: './drop-off.page.html',
  styleUrls: ['./drop-off.page.scss'],
})
export class DropOffPage implements OnInit {

  donation = {} as Donation

  constructor(private router: Router, private angularfire:  AngularFirestore,
    private afAuth: AngularFireAuth) { }

  ngOnInit() {
  }

  form(donation: Donation){
    const userid = this.afAuth.auth.currentUser.uid;
    // // const key = this.afAuth.auth.currentUser.uid;
   
    //    this.angularfire.collection('donation/'+ userid +'/donations/').add({
    //      Userid:this.afAuth.auth.currentUser.uid,
    //      name: donation.name,
    //      surname: donation.surname,
    //      location: donation.location,
    //      date: Date.now(),
    //      type: donation.type,
    //      phoneNumber: donation.phoneNumber,
    //      description: donation.description
    //    }).then (() =>{
    //      this.router.navigateByUrl('donation');
    //    })

       this.angularfire.collection('donation').doc( userid +'/donations').set({
         location:donation.location
       }).then(() => {
         this.router.navigateByUrl('donation')
       })
   
     }

}
