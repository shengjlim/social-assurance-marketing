import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-landing-page',
  templateUrl: './admin-landing-page.component.html',
  styleUrls: ['./admin-landing-page.component.css']
})
export class AdminLandingPageComponent{

  constructor(private router: Router) { }

  adminForm() {
    this.router.navigate(['/adminform']);
  }

  viewEntries() {
    this.router.navigate(['/entries']);
  }
}
