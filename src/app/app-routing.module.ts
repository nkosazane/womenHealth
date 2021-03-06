import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'login', loadChildren: './page/login/login.module#LoginPageModule' },
  { path: 'register', loadChildren: './page/register/register.module#RegisterPageModule' },
  { path: 'donation', loadChildren: './page/donation/donation.module#DonationPageModule' },
  { path: 'chat-forum', loadChildren: './page/chat-forum/chat-forum.module#ChatForumPageModule' },
  { path: 'donation-item', loadChildren: './page/donation-item/donation-item.module#DonationItemPageModule' },
  { path: 'donation-money', loadChildren: './page/donation-money/donation-money.module#DonationMoneyPageModule' },
  { path: 'video-tutorials', loadChildren: './page/video-tutorials/video-tutorials.module#VideoTutorialsPageModule' },
  { path: 'profile', loadChildren: './page/profile/profile.module#ProfilePageModule' },
  { path: 'paypal', loadChildren: './page/paypal/paypal.module#PaypalPageModule' },
  { path: 'paypalweb', loadChildren: './page/paypalweb/paypalweb.module#PaypalwebPageModule' },
  { path: 'chat-forum1', loadChildren: './page/chat-forum1/chat-forum1.module#ChatForum1PageModule' },
  { path: 'chat-forum2', loadChildren: './page/chat-forum2/chat-forum2.module#ChatForum2PageModule' },
  { path: 'drop-off', loadChildren: './page/drop-off/drop-off.module#DropOffPageModule' },
  { path: 'tracker', loadChildren: './page/tracker/tracker.module#TrackerPageModule' },



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
