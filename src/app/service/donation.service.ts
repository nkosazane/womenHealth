import { Injectable } from '@angular/core';
import { AngularFirestoreDocument, AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class DonationService {

  private donationDoc: AngularFirestoreDocument<Donation>;

  donation = {} as Donation;

  constructor(private angularfire: AngularFirestore) { }

  getFile(key){
  
    return this.angularfire.collection('donation').doc('donators').collection(key).valueChanges();
  }

}
