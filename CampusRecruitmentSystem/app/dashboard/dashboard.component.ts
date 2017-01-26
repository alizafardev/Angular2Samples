import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

import { AppService } from '../services/app.service';

declare var require;
@Component({
    template: require('./dashboard.component.html')
})

export class DashboardComponent{
    myForm: FormGroup;
    constructor(fb: FormBuilder, private router: Router, private as: AppService) {
        this.myForm = fb.group({
            'email': '',
            'pswd': ''
        });
    }

    login(value){
        const email = value.email;
        const pswd  = value.pswd;
        this.as.adminLogin(email, pswd);
        this.router.navigate(['admin-dashboard']);
    }
 }