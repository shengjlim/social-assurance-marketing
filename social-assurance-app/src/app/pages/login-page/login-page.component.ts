import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login-service.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  public credentialForm: FormGroup;

  constructor(public auth: LoginService, private router: Router) { }

  ngOnInit() {
    this.credentialForm = new FormGroup({
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });
  }

  login(credentialFormValue): void {
    if (credentialFormValue.email === "" || credentialFormValue.password === "") {
      return;
    }
    else {
      this.auth.emailLogin(credentialFormValue.email, credentialFormValue.password);
      if (this.auth.authenticated) {
        let groupId = this.getGroupIdFromUserId;
        this.router.navigate(['/adminform', { id: groupId, email: credentialFormValue.email }]);
      }
    }
  }

  createAccount(): void {
    this.router.navigate(['/createAccount']);
  }

  getGroupIdFromUserId() {
    // TODO:
  }
}
