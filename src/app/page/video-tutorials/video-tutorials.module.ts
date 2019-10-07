import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { VideoTutorialsPage } from './video-tutorials.page';

const routes: Routes = [
  {
    path: '',
    component: VideoTutorialsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [VideoTutorialsPage]
})
export class VideoTutorialsPageModule {}
