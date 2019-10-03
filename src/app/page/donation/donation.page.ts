import { Component, OnInit } from '@angular/core';
import { ModalController, AlertController } from '@ionic/angular';
import { ExampleModalPage } from '../example-modal/example-modal.page';
import { Router } from '@angular/router';

@Component({
  selector: 'app-donation',
  templateUrl: './donation.page.html',
  styleUrls: ['./donation.page.scss'],
})
export class DonationPage implements OnInit {


  constructor(
    public alertController: AlertController, public route:Router
  ) { 
 
  }
     
  ngOnInit() {

  }
 


  openForm() {
    document.getElementById("myForm").style.display = "block";
    this.x=document.getElementById("tempGrid");
     this.x.style.display = "block";
         
  }
  openForm2() {
    document.getElementById("myForm2").style.display = "block";
    this.x=document.getElementById("tempGrid1");
     this.x.style.display = "block";
         
  }
  openForm3() {
    document.getElementById("myForm3").style.display = "block";
    this.x=document.getElementById("tempGrid2");
     this.x.style.display = "block";
         
  }
  openForm4() {
    document.getElementById("myForm3").style.display = "block";
    this.x=document.getElementById("tempGrid3");
     this.x.style.display = "block";
         
  }
  openOrder() {
    document.getElementById("myOrder").style.display = "block";
    this.x=document.getElementById("tempGrid2");
     this.x.style.display = "block";
         
  }
  closeForm() {
    document.getElementById("myForm2").style.display = "none";

  }
  closeForm1() {
    document.getElementById("myForm3").style.display = "none";

  }
  closeForm2() {
    document.getElementById("myOrder").style.display = "none";
  }
  
  
      printContents:any;
      originalContents:any;
      x:any;
 
 
}
