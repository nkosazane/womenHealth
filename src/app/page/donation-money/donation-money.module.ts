import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DonationMoneyPage } from './donation-money.page';

const routes: Routes = [
  {
    path: '',
    component: DonationMoneyPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DonationMoneyPage]
})
export class DonationMoneyPageModule {}
