import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CompanyService } from '../../services/company/company.service';

declare var require;
@Component({
    template: require('./company.login.component.html')
})

export class CompanyLoginComponent {
    myForm: FormGroup;

    constructor(fb: FormBuilder, private router: Router, private cs: CompanyService){
        this.myForm = fb.group({
            'username': '',
            'password' : ''
        });
    }

    onSubmit(value) {
        console.log('Submitted Value: ', value);
        this.cs.cSignin(value.username, value.password);
        this.router.navigate(['company-dashboard']);
    }
}