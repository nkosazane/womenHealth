import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
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
    private afAuth: AngularFireAuth, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => { console.log(params);
    
      this.donation.name = params.name,
      this.donation.surname = params.surname,
      this.donation.phoneNumber = params.phoneNumber,
      this.donation.location = params.location,
      this.donation.type = params.type,
      this.donation.description = params.description
    })
  }

     done(){
       this.router.navigateByUrl('donation');
     }

}
