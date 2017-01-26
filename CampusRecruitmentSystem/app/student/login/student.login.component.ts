import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

declare var require;
@Component({
    template: require('./student.login.component.html')
})

export class StudentLoginComponent {
    myForm: FormGroup;
   constructor(fb: FormBuilder, private router: Router) {
        this.myForm = fb.group({
            'username': '',
            'password': ''       
        });
    }

    onSubmit(value){
        console.log('Studen login value', value);
        this.router.navigate(['student-dashboard']);
    }

}