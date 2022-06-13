import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DsigninComponent } from './dsignin/dsignin.component';
import { DsignupComponent } from './dsignup/dsignup.component';
import { RsigninComponent } from './rsignin/rsignin.component';
import { RsignupComponent } from './rsignup/rsignup.component';

import { AdminComponent } from './admin/admin.component';

import { DonorComponent } from './donor/donor.component';
import { ReceiverComponent } from './receiver/receiver.component';
import { Donor1Guard } from './donor1.guard';
import { ThankyouComponent } from './thankyou/thankyou.component';
 
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { DeactiveGuard } from './deactive.guard';
import { LogoutGuard } from './logout.guard';



const routes: Routes = [

  {path:'',component:HomeComponent},
  { path: 'admin', component: AdminComponent, canActivate: [Donor1Guard,LogoutGuard]},
  { path: 'home', component: HomeComponent, canActivate: [Donor1Guard,LogoutGuard]},
  { path: 'about', component: AboutComponent, canActivate: [Donor1Guard,LogoutGuard]},
  { path: 'dsignin', component: DsigninComponent, canActivate: [Donor1Guard,LogoutGuard]},
  { path: 'dsignup', component: DsignupComponent, canActivate: [Donor1Guard,LogoutGuard]},
  { path: 'rsignin', component: RsigninComponent, canActivate: [Donor1Guard,LogoutGuard]},
  { path: 'rsignup', component: RsignupComponent, canActivate: [Donor1Guard,LogoutGuard]},
  { path: 'donor1', component: DonorComponent, canActivate: [Donor1Guard,LogoutGuard]},
  { path: 'receiver1', component: ReceiverComponent, canActivate: [Donor1Guard,LogoutGuard]},
  { path:'thankyou',component:ThankyouComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
