import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { AdminComponent } from './admin/admin.component';
import { DonorComponent } from './donor/donor.component';
import { DsigninComponent } from './dsignin/dsignin.component';
import { DsignupComponent } from './dsignup/dsignup.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { MapsComponent } from './maps/maps.component';
import { ReceiverComponent } from './receiver/receiver.component';
import { RsigninComponent } from './rsignin/rsignin.component';
import { RsignupComponent } from './rsignup/rsignup.component';
import { ThankyouComponent } from './thankyou/thankyou.component';
import { AgmCoreModule } from '@agm/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    AdminComponent,
    DonorComponent,
    DsigninComponent,
    DsignupComponent,
    FooterComponent,
    HomeComponent,
    MapsComponent,
    ReceiverComponent,
    RsigninComponent,
    RsignupComponent,
    ThankyouComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,HttpClientModule,
    ReactiveFormsModule,
    AgmCoreModule.forRoot({
      apiKey: '',
      libraries: ['places']
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
