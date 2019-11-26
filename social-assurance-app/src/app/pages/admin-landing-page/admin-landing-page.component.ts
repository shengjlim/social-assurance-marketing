import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login-service.service';

@Component({
  selector: 'app-admin-landing-page',
  templateUrl: './admin-landing-page.component.html',
  styleUrls: ['./admin-landing-page.component.css']
})
export class AdminLandingPageComponent implements OnInit {

  constructor(private router: Router, private auth: LoginService) { }

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
    this.email = this.auth.currentUserEmail;
    this.id = this.auth.getGroupId();
  }
}
