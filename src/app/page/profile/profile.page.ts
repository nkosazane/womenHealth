import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { DonationService } from 'src/app/service/donation.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { UsersService } from '../../service/users.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  donation = {} as Donation;
 donateList;
 users = {} as Users;
 userList;

  constructor(
    private afAuth: AngularFireAuth,
    private angularfire: AngularFirestore,
     private donateServ: DonationService,
    private userServ: UsersService,
  ) {

    const key = this.afAuth.auth.currentUser.uid;

    this.donateServ.getFile(key).subscribe(data => {
      this.donateList = data;
      console.log(data);
    });

    // this.users=afstore.collection('donation').valueChanges();
  }

  ngOnInit() {
    // this.donators = this.donateServ.getdonator();
    const key = this.afAuth.auth.currentUser.uid;
    this.userServ.getUser(key).subscribe(data =>{
      this.userList = data;
      console.log(data)
    })
  
  }
  
 
}
