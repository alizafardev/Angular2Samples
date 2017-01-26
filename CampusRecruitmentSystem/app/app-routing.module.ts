import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';

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

export const appRoutes: Routes = [
    { path: '', component: DashboardComponent },
    { path: 'about-us', component: AboutusComponent },
    { path: 'faq', component: FAQComponent },
    { path: 'company-login', component: CompanyLoginComponent },
    { path: 'company-register', component: CompanyRegisterComponent },
    { path: 'company-dashboard', component: CompanyDashboardComponent,
    children: [
        { path: 'student-search', component: StudentSearchComponent },
        { path: 'post-vacancy', component: PostVacancyComponent }
    ]
    },
    { path: 'student-login', component: StudentLoginComponent },
    { path: 'student-register', component: StudentRegisterComponent },
    { path: 'student-dashboard', component: StudentDashboardComponent },
    { path: 'admin-dashboard', component: AdminComponent}
]