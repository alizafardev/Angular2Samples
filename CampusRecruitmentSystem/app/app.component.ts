import { Component } from '@angular/core';
import { AppService } from './services/app.service';
import { CompanyService } from './services/company/company.service';
import { Router } from '@angular/router';

declare var require;
@Component({
  selector: 'my-app',
  template: require('./app.component.html')
})
export class AppComponent { 
  constructor(private cs: CompanyService, private router: Router) { }

  onLogout(){
    console.log("Logout");
      this.cs.cLogout();
     this.router.navigate(['']);
  }
}
