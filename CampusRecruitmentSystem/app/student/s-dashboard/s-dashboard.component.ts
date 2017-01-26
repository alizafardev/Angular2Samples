import { Component } from '@angular/core';
import { AngularFire } from 'angularfire2';

declare var require;
@Component({
    template: require('./s-dashboard.component.html')
})

export class StudentDashboardComponent {
    vacancy;
  constructor(private af: AngularFire) {
     this.vacancy = this.af.database.list('/vacancy');
   }

   onApply(){
       alert('You applied for this job');
   }
}