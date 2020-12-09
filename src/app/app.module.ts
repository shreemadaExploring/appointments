import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PopupsComponent } from './common/popups/popups.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { LoginComponent } from './base/login/login.component';
import { ListComponent } from './appointment/list/list.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    PopupsComponent,
    AppointmentComponent,
    LoginComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
