import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { StudentService } from '../../services/student/student.service';

declare var require;
@Component({
    template: require('./student.register.component.html')
})

export class StudentRegisterComponent{
    sRegForm: FormGroup;
    constructor(fb: FormBuilder, private ss: StudentService, private router: Router) {
        this.sRegForm = fb.group({
            'name': '',
            'email': '',
            'pwd': '',
            'University': '',
            'CGPA': '',            
        });
    }

    onSignup(value){
        event.preventDefault();
        const email = value.email;
        const password = value.pwd;
        console.log('email :'+ email + ' password: ' + password);
        this.ss.sSignup(email, password);
    }
    onCreateAccount(value){
        event.preventDefault();
        delete value.pwd;
        this.ss.createAccount(value);
        console.log('createAccount ', value);
        this.router.navigate(['student-login']);
    }

    

}