import { Injectable } from '@angular/core';
import { AngularFirestoreDocument, AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private usersDoc: AngularFirestoreDocument<Users>

  constructor(private angularfire:AngularFirestore) { }

  getUsers(){
    return this.angularfire.collection('users').snapshotChanges();
  }
}
