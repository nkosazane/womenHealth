import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'login', loadChildren: './page/login/login.module#LoginPageModule' },
  { path: 'register', loadChildren: './page/register/register.module#RegisterPageModule' },
  // { path: 'recover', loadChildren: './page/recover/recover.module#RecoverPageModule' },
  { path: 'donation', loadChildren: './page/donation/donation.module#DonationPageModule' },
  { path: 'chat-forum', loadChildren: './page/chat-forum/chat-forum.module#ChatForumPageModule' },
  { path: 'example-modal', loadChildren: './page/example-modal/example-modal.module#ExampleModalPageModule' },
  { path: 'donation-item', loadChildren: './page/donation-item/donation-item.module#DonationItemPageModule' },
  { path: 'donation-money', loadChildren: './page/donation-money/donation-money.module#DonationMoneyPageModule' },
  { path: 'video-tutorials', loadChildren: './page/video-tutorials/video-tutorials.module#VideoTutorialsPageModule' }


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
