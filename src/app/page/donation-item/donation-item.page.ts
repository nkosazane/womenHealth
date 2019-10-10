import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-donation-item',
  templateUrl: './donation-item.page.html',
  styleUrls: ['./donation-item.page.scss'],
})
export class DonationItemPage implements OnInit {

  name = new FormControl('');
  Surname = new FormControl('');
  Age= new FormControl('');
  ContactNumber = new FormControl('');
  Donationtype = new FormControl('');

  constructor(private router: Router) { }

  ngOnInit() {
  }

  back(){
    this.router.navigateByUrl('donation')
  }

}
