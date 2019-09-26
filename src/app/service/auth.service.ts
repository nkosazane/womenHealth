import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private afauth: AngularFireAuth,
  ) { }
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
   
   resetPassword(email: string) {
    var auth = firebase.auth();
    return auth.sendPasswordResetEmail(email)
      .then(() => console.log("email sent"))
      .catch((error) => console.log(error))
  }

   userDetails(){
     return firebase.auth().currentUser;
   }
   getAuth() { 
    return this.afauth.auth; 
  } 
  // resetPasswordInit(email: string) { 
  //   return this.afauth.auth.sendPasswordResetEmail(
  //     email, 
  //     { url: 'http://localhost:4200/auth' }); 
  //   } 
    // reset(email : string){
    //   return new Promise<any>((resolve, reject) => {
    //   firebase.auth().sendPasswordResetEmail(email)
    //   .then((res: any) => console.log(res))
    //   .catch((error: any) => console.error(error));
    //   })}
    async sendPasswordResetEmail(passwordResetEmail: string) {
      return await this.afauth.auth.sendPasswordResetEmail(passwordResetEmail);
    }
}
