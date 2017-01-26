import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CompanyService } from '../../services/company/company.service';

declare var require;
@Component({
    template: require('./company.register.component.html')
})

export class CompanyRegisterComponent{
    cRegForm: FormGroup;
    constructor(fb: FormBuilder, private cs: CompanyService, private router: Router) {
        this.cRegForm = fb.group({
            'cname': '',
            'estd': '',
            'email': '',
            'pswd': '',            
        });
    }

    onSignup(value){
        event.preventDefault();
        const username = value.email;
        const password = value.pswd;
        console.log('username :'+ username + ' password: ' + password);
        this.cs.cSignup(username, password);
    }
    onCReg(value){
        event.preventDefault();
        delete value.pswd;
        this.cs.cReg(value);
        console.log('RegValue: ', value);
        this.router.navigate(['company-login']);
    }

    

}