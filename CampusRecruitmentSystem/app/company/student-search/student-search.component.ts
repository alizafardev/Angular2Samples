import { Component, OnInit } from '@angular/core';
import { CompanyService } from '../../services/company/company.service';
import { AngularFire } from 'angularfire2';
// import { Angul}

declare var require
@Component({
    template: require('./student-search.component.html')
})

export class StudentSearchComponent implements OnInit{
students;
constructor(private cs: CompanyService, private af: AngularFire){ }

ngOnInit() {
    this.students = this.af.database.list('/students');
}



}