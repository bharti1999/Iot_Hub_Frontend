import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms'
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { AuthService} from './services/auth.service';
import {AuthGuardService} from './services/auth-guard.service';
import {AdminGuardService} from './services/admin-guard.service';
import {ThingsService}  from './services/things.service';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { UsersPageComponent } from './users-page/users-page.component';
import { RegistrationComponent } from './registration/registration.component';



const routes : Routes = [
  {path:'user-home', component : UsersPageComponent, canActivate:[AuthGuardService]},
  {path:'admin-home', component : AdminPageComponent, canActivate:[AdminGuardService]},
  {path:'registration', component : RegistrationComponent},
  {path:'', component : LandingPageComponent},
  {path: '', redirectTo: '/', pathMatch: 'full'}
]

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    AdminPageComponent,
    UsersPageComponent,
    RegistrationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  providers: [ 
    AuthService,
    AuthGuardService,
    AdminGuardService,
    ThingsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
