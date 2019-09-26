import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { AuthService } from '../../service/auth.service';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-recover',
  templateUrl: './recover.page.html',
  styleUrls: ['./recover.page.scss'],
})
export class RecoverPage implements OnInit {
  isForgotPassword: boolean;
  emailInput;
  email: string;
  validations_form: FormGroup;
  errorMessage: string = '';
  responseMessage: string;
  responseMessageType: string;
  constructor(
    private navCtrl: NavController,
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private afauth: AngularFireAuth,
  ) { }
  getAuth() { 
    return this.afauth.auth; 
  } 
  ngOnInit() {
    
    // this.validations_form = this.formBuilder.group({
    //   email: new FormControl('', Validators.compose([
    //     Validators.required,
    //     Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
    //   ])),
    //   password: new FormControl('', Validators.compose([
    //     Validators.minLength(5),
    //     Validators.required
    //   ])),
    // });
  }
 
  // validation_messages = {
  //   'email': [
  //     { type: 'required', message: 'Email is required.' },
  //     { type: 'pattern', message: 'Please enter a valid email.' }
  //   ],
  //   'password': [
  //     { type: 'required', message: 'Password is required.' },
  //     { type: 'minlength', message: 'Password must be at least 5 characters long.' }
  //   ]
  // };
 
  recover(value) {
    this.authService.recover(value)
      .then(res => {
        console.log(res);
        this.errorMessage = "";
        this.navCtrl.navigateBack('/login');
      },
      err => {
        console.log(err);
        this.errorMessage = err.message;
        
      })
    }
    // resetPassword(email: string) {
    //   this.authService.resetPassword(email)
    // }
    // resetPassword() { 
    //   if (!this.email) { 
    //     alert('Type in your email first'); 
    //   }
    //   this.authService.resetPasswordInit(this.email) 
    //   .then(
    //     () => alert('A password reset link has been sent to your email address'), 
    //     (rejectionReason) => alert(rejectionReason)) 
    //   .catch(e => alert('An error occurred while attempting to reset your password')); 
    // }
    // reset(value){
    //   this.authService.reset(this.email)
    //   .then(res => {
    //     console.log(res);
    //     this.errorMessage = "";
    //     this.navCtrl.navigateForward('/login');
    //   }, err => {
    //     this.errorMessage = err.message;
    //     console.log(err);
    //   })
    // }
     // Send link on given email to reset password
     showMessage(type, msg) {
      this.responseMessageType = type;
      this.responseMessage = msg;
      setTimeout(() => {
        this.responseMessage = "";
      }, 2000);
    }
    forgotPassword() {
      this.authService.sendPasswordResetEmail(this.emailInput)
        .then(res => {
          console.log(res);
          this.isForgotPassword = false;
          this.showMessage("success", "Please Check Your Email");
        }, err => {
          this.showMessage("danger", err.message);
        });
    }
}
