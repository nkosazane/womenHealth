import { Component, OnInit } from '@angular/core';
import { ModalController, AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { AuthService } from '../../service/auth.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-donation',
  templateUrl: './donation.page.html',
  styleUrls: ['./donation.page.scss'],
})
export class DonationPage implements OnInit {

  constructor(
    public alertController: AlertController, public route:Router,
    public auth: AuthService, private angularfire:  AngularFirestore, private router: Router,
    private afAuth: AngularFireAuth
  ) { 
 
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
         this.router.navigateByUrl('drop-off');
       })
   
     }

  payment(){
    this.router.navigateByUrl('donation-money');
  }

  items(){
    this.router.navigateByUrl('donation-item')
  }

  back(){
    this.router.navigateByUrl('chat-forum')
  }

}
