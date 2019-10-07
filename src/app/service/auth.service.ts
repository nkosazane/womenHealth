import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afs: AngularFirestore, private router: Router, public afAuth: AngularFireAuth, private alertCtrl : AlertController ) { 
    afAuth.auth.onAuthStateChanged((user)=>{
      // if(user){
      //   this.router.navigateByUrl("");
      // }else{
      //   this.router.navigateByUrl("");
      // }
    })
  }

  async login(email: string , password: string){
    await this.afAuth.auth.signInWithEmailAndPassword(email,password).then((success)=>{
       console.log(success);
     }).catch((error)=>{
       console.log(error)
     })

  }
   
   async signup(email, password){
    await this.afAuth.auth.createUserWithEmailAndPassword(email,password).then((success)=>{
      console.log(success);
    }).catch((error)=>{
     console.log(error)
    })
  }

  getUID(): string {
    return this.afAuth.auth.currentUser.uid;
  }

  async sendPasswordResetEmail(passwordResetEmail: string) {
    return await this.afAuth.auth.sendPasswordResetEmail(passwordResetEmail);
  }
}