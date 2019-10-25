import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { DonationService } from 'src/app/service/donation.service';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  donation = {} as Donation;
  donateList;

  constructor(
    private afAuth: AngularFireAuth,
    private angularfire: AngularFirestore, private donateServ: DonationService
  ) {

    const key = this.afAuth.auth.currentUser.uid;

    this.donateServ.getFile(key).subscribe(data => {
      this.donateList = data;
      console.log(data);
    });

    // this.users=afstore.collection('donation').valueChanges();
  }

  ngOnInit() {
  }

}
