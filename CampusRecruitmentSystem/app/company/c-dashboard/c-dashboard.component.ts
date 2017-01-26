import { Component } from '@angular/core';
import { CompanyService } from '../../services/company/company.service';
declare var require;
@Component({
    template: require('./c-dashboard.component.html')
})

export class CompanyDashboardComponent {
    constructor(private cs: CompanyService ) { }
    
}