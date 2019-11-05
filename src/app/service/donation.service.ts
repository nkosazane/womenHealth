import { Injectable } from '@angular/core';
import { AngularFirestoreDocument, AngularFirestore, AngularFirestoreCollection, DocumentReference } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import * as firebase from 'firebase';
export interface donation {

}
@Injectable({
  providedIn: 'root'
})
export class DonationService {

  private donationDoc: AngularFirestoreDocument<Donation>;

  donation = {} as Donation;

  constructor(private angularfire: AngularFirestore) {
  
   }
   getFile(key){
    return this.angularfire.collection('donation').doc(key).collection('donations').valueChanges();
  }

}
