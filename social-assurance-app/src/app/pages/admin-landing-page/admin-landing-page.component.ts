import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-landing-page',
  templateUrl: './admin-landing-page.component.html',
  styleUrls: ['./admin-landing-page.component.css']
})
export class AdminLandingPageComponent implements OnInit {

  constructor(private router: Router) { }

  id: string;
  email: string;

  ngOnInit() {
    this.getEmailAndGroupId(this.router.url);
  }

  adminForm() {
    this.router.navigate(['/adminform', { id: this.id, email: this.email }]);
  }

  viewEntries() {
    this.router.navigate(['/entries', { id: this.id }]);
  }

  getEmailAndGroupId(string) {
    let parameters = string.split(";");
    this.id = parameters[1].slice(3);
    this.email = parameters[2].slice(6);
    console.log(this.id);
    console.log(this.email);
  }
}
