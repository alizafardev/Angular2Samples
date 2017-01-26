import { Component, OnInit } from '@angular/core';
import { AngularFire } from 'angularfire2';

declare var require;
@Component({
    template: require('./admin.component.html')
})

export class AdminComponent implements OnInit{
    students;
    vacancies;
    companies;
    constructor(private af: AngularFire){ }

    ngOnInit() {
        this.students = this.af.database.list('/students');
        this.vacancies = this.af.database.list('/vacancy');
        this.companies = this.af.database.list('/companies');
    }

    onDelete(key,index){
        console.log('Key: ', key);
        this.vacancies.remove(key);
    }
}