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
      groupId: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
    });
  }

  login(credentialFormValue): void {
    if (credentialFormValue.email === "" || credentialFormValue.groupId === "") {
      window.alert("Both fields are required.");
      return;
    }
    else {
      this.auth.setGroupId(credentialFormValue.groupId);
      this.auth.setAssociateEmail(credentialFormValue.email)
      // TODO: Authenticate existence of group ID
      this.router.navigate(['/associateform']);
    }
  }

  createAccount(): void {
    this.router.navigate(['/createAccount']);
  }
}
