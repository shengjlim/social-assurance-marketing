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

  login(): void {
    let credentialFormValue = this.credentialForm.value;
    if (credentialFormValue.email === "" || credentialFormValue.groupId === "") {
      alert("Both fields are required.");
    }
    else {
      this.auth.getGroupObject(credentialFormValue.groupId).get().subscribe(data => {
        if(data.docs.length > 0) {
          this.auth.setAssociateGroupId(credentialFormValue.groupId);
          this.auth.setAssociateEmail(credentialFormValue.email)
          this.router.navigate(['/associateform']);
        }else{
          alert("Invalid group id.")
        }
      })
    }
  }

  createAccount(): void {
    this.router.navigate(['/createAccount']);
  }
}
