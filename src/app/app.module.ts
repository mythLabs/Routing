import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
 import {ToastModule} from 'ng2-toastr/ng2-toastr';
 import {HttpClientModule} from '@angular/common/http';

import { RouterModule, Routes } from '@angular/router';
import { FormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ContactUsComponent } from './Home/contact-us/contact-us.component';
import { DashboardComponent } from './Home/dashboard/dashboard.component';

import{loginService} from './Services/app.loginService';
import{apiService} from './Services/app.apiService';

import {guard} from './Guard/app.guard';
import { SettingsComponent } from './Home/settings/settings.component';
import { ServicesComponent } from './Home/services/services.component';
import { DetailComponent } from './Home/dashboard/detail/detail.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent,canActivate: [guard] },
  { path: 'home',component: HomeComponent,canActivate: [guard],
               children:[
                 {path:'',component:DashboardComponent},
                 {path:'dashboard',component:DashboardComponent},
                 {path:'contactus',component:ContactUsComponent},
                 {path:'settings',component:SettingsComponent},
                 {path:'services',component:ServicesComponent}
               ] },
  { path: 'login', component: LoginComponent }
  
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    ContactUsComponent,
    DashboardComponent,
    SettingsComponent,
    ServicesComponent,
    DetailComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes
    ),
    FormsModule, BrowserAnimationsModule, ToastModule.forRoot(),
    HttpClientModule
  ],
  providers: [loginService,guard,apiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
