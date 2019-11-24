import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LoginService } from 'src/app/services/login-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-associate-login-page',
  templateUrl: './associate-login-page.component.html',
  styleUrls: ['./associate-login-page.component.css']
})
export class AssociateLoginPageComponent implements OnInit {
  public credentialForm: FormGroup;

  constructor(public auth: LoginService, private router: Router) { }

  ngOnInit() {
    this.credentialForm = new FormGroup({
      email: new FormControl('', Validators.required),
      groupId: new FormControl('', Validators.required)
    });
  }

  login(credentialFormValue): void {
    if (credentialFormValue.email === "" || credentialFormValue.password === "") {
      return;
    }
    else {
      // this.auth.emailLogin(credentialFormValue.email, credentialFormValue.password);
      // if (this.auth.authenticated) {
      //   this.router.navigate(['/adminform']);
      // }
      this.router.navigate(['/associateform', { id: credentialFormValue.groupId }]);
    }
  }

  createAccount(): void {
    this.router.navigate(['/createAccount']);
  }
}
