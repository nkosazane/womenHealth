import { Component, OnInit } from '@angular/core';
import { ModalController, AlertController } from '@ionic/angular';
import { ExampleModalPage } from '../example-modal/example-modal.page';
import { Router } from '@angular/router';
import { AuthService } from '../../service/auth.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-donation',
  templateUrl: './donation.page.html',
  styleUrls: ['./donation.page.scss'],
})
export class DonationPage implements OnInit {
  // doner: any;
  // name: string;
  // age: number;
  // surname: string;


  constructor(
    public alertController: AlertController, public route:Router,
    public auth: AuthService, private angularfire:  AngularFirestore, private router: Router,
    private afAuth: AngularFireAuth
  ) { 
 
  }
     
  ngOnInit() {
  }

  form(donation: Donation){
    const userid = this.afAuth.auth.currentUser.uid;
   
       this.angularfire.collection('donation/donators/'+userid).add({
         Userid:this.afAuth.auth.currentUser.uid,
         name: donation.name,
         surname: donation.surname,
         location: donation.location,
         date: Date.now(),
         type: donation.type
       }).then (() =>{
         this.router.navigateByUrl('drop-off');
       })
   
     }
   

  payment(){
    this.router.navigateByUrl('donation-money');
  }

  items(){
    this.router.navigateByUrl('donation-item')
  }

  back(){
    this.router.navigateByUrl('chat-forum')
  }

 
//   CreateRecord() {
//     let record = {};
//     record['Name'] = this.name;
//     record['Age'] = this.age;
//     record['Address'] = this.surname;
//     this.auth.create_donation(record).then(resp => {
//       this.name = "";
//       this.age = undefined;
//       this.surname = "";
//       console.log(resp);
//     })
//       .catch(error => {
//         console.log(error);
//       });
//   }
//  // --------------Chocolate---------------------
//   openForm() {
//     document.getElementById("myForm").style.display = "block";
//     this.x=document.getElementById("tempGrid");
//      this.x.style.display = "block";
         
//   }
//   openForm2() {
//     document.getElementById("myForm2").style.display = "block";
//     this.x=document.getElementById("tempGrid1");
//      this.x.style.display = "block";
         
//   }
//   openForm3() {
//     document.getElementById("myForm3").style.display = "block";
//     this.x=document.getElementById("tempGrid2");
//      this.x.style.display = "block";
         
//   }
//   openForm4() {
//     document.getElementById("myForm3").style.display = "block";
//     this.x=document.getElementById("tempGrid3");
//      this.x.style.display = "block";
         
//   }
//   openOrder() {
//     document.getElementById("myOrder").style.display = "block";
//     this.x=document.getElementById("tempGrid2");
//      this.x.style.display = "block";
         
//   }
//   closeForm() {
//     document.getElementById("myForm2").style.display = "none";

//   }
//   closeForm1() {
//     document.getElementById("myForm3").style.display = "none";

//   }
//   closeForm2() {
//     document.getElementById("myOrder").style.display = "none";
//   }
  
  
//       printContents:any;
//       originalContents:any;
//       x:any;
 
 
}
