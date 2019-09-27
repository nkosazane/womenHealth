import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private afauth: AngularFireAuth,
    public router: Router

  ) {
    this.afauth.authState.subscribe(userResponse => {
      if (userResponse) {
        localStorage.setItem('user', JSON.stringify(userResponse));
      } else {
        localStorage.setItem('user', null);
      }
    })
   }
  registerUser(value){
    return new Promise<any>((resolve, reject) => {
      firebase.auth().createUserWithEmailAndPassword(value.email, value.password)
      .then(
        res => resolve(res),
        err => reject(err))
    })
   }
  
   loginUser(value){
    return new Promise<any>((resolve, reject) => {
      firebase.auth().signInWithEmailAndPassword(value.email, value.password)
      .then(
        res => resolve(res),
        err => reject(err))
    })
   }
    
   recover(value){
    return new Promise<any>((resolve, reject) => {
      firebase.auth().sendPasswordResetEmail(value.email)
      .then(
        res => resolve(res),
        err => reject(err))
    })
   }
   logoutUser(){
     return new Promise((resolve, reject) => {
       if(firebase.auth().currentUser){
         firebase.auth().signOut()
         .then(() => {
           console.log("LOG Out");
           resolve();
         }).catch((error) => {
           reject();
         });
       }
     })
   }
   
  
  async login(email: string, password: string) {
    return await this.afauth.auth.signInWithEmailAndPassword(email, password);
  }
 
  async register(email: string, password: string) {
    return await this.afauth.auth.createUserWithEmailAndPassword(email, password)
  }
 
  async sendEmailVerification() {
    return await this.afauth.auth.currentUser.sendEmailVerification();
  }
 
  async sendPasswordResetEmail(passwordResetEmail: string) {
    return await this.afauth.auth.sendPasswordResetEmail(passwordResetEmail);
  }
 
  async logout() {
    return await this.afauth.auth.signOut();
  }
 
 
  isUserLoggedIn() {
    return JSON.parse(localStorage.getItem('user'));
  }
 
}
