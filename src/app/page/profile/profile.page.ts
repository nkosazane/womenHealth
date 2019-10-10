import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  donate={
    locate:"",
    name:"",
    surname:"",
    type:"",
  key:"",
  }
  users:any;
  constructor(
    public afstore: AngularFirestore,
  ) { 

    this.users=afstore.collection('donation').valueChanges();
  }

  ngOnInit() {
  }

}
