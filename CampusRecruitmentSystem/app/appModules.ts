import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AngularFireModule, AuthProviders } from 'angularfire2';
import { appRoutes } from "./app-routing.module"
import { RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { AboutusComponent } from './about-us/about-us.component';
import { FAQComponent } from './faq/faq.component';

/* Company */
import { CompanyLoginComponent } from './company/login/company.login.component';
import { CompanyRegisterComponent } from './company/register/company.register.component';
import { CompanyDashboardComponent } from './company/c-dashboard/c-dashboard.component';
import { StudentSearchComponent } from './company/student-search/student-search.component';
import { PostVacancyComponent } from './company/post-vacancy/post-vacancy.component';

/* Student */
import { StudentLoginComponent } from './student/login/student.login.component';
import { StudentRegisterComponent } from './student/register/student.register.component';
import { StudentDashboardComponent } from './student/s-dashboard/s-dashboard.component';

/* Admin */
import { AdminComponent } from './admin/admin.component';

import { CompanyService } from './services/company/company.service';
import { StudentService } from './services/student/student.service';
import { AppService } from './services/app.service';

// Your App Configuration which can found on firebase.google.com
  export var config = {
    apiKey: "AIzaSyATFXCCz6Qc46e83qvzRtR89U78PMVi3ks",
    authDomain: "campusrecruitmentsystem.firebaseapp.com",
    databaseURL: "https://campusrecruitmentsystem.firebaseio.com",
    storageBucket: "campusrecruitmentsystem.appspot.com",
    messagingSenderId: "345387789264"
  };


// Your App Configuration which can found on firebase.google.com

@NgModule({
  imports: [  BrowserModule
            , FormsModule
            , ReactiveFormsModule  
            , RouterModule.forRoot(appRoutes)
            , AngularFireModule.initializeApp(config)
  ],
  declarations: [ AppComponent
                , DashboardComponent
                , AboutusComponent
                , FAQComponent
                , CompanyLoginComponent
                , CompanyRegisterComponent
                , CompanyDashboardComponent
                , StudentSearchComponent
                , PostVacancyComponent
                , StudentLoginComponent
                , StudentRegisterComponent
                , StudentDashboardComponent
                , AdminComponent
                ],
  providers: [  AppService
              , CompanyService
              , StudentService],
  bootstrap: [AppComponent]
})
export class AppModule { }