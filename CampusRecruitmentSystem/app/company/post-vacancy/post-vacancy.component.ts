import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CompanyService } from '../../services/company/company.service';

declare var require;

@Component({
    template: require('./post-vacancy.component.html')
})

export class PostVacancyComponent{
    myForm: FormGroup

    constructor(fb: FormBuilder, private cs: CompanyService){
        this.myForm = fb.group ({
            'cName': '',
            'vacancy': ''
        });
    }

    onSubmit(value){
        console.log('Vacancy: ', value);
        this.cs.postVacancy(value);
        alert('Your vacancy has been post!');
    }

}