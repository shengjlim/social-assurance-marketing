import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Guid } from "guid-typescript";
import { User } from '../../models/user';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-create-account-page',
  templateUrl: './create-account-page.component.html',
  styleUrls: ['./create-account-page.component.css']
})
export class CreateAccountPageComponent implements OnInit {

  public newAccountForm: FormGroup;
  public groupId: string;

  constructor(private firebase: AngularFireAuth, private router: Router) { }

  ngOnInit() {
    this.newAccountForm = new FormGroup({
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      passwordConfirmation: new FormControl('', Validators.required),
    });
  }

  createAccount(): void {
    if (this.newAccountForm.value.email === "" || this.newAccountForm.value.password === "" || this.newAccountForm.value.passwordConfirmation === "") {
      window.alert("All fields are required.")
    }
    else if (this.newAccountForm.value.password !== this.newAccountForm.value.passwordConfirmation) {
      window.alert("The passwords don't match.")
    }
    else {
      this.groupId = Guid.raw();
      const user = new User(this.newAccountForm.value.email, this.newAccountForm.value.password, this.groupId);
      this.firebase.auth.createUserWithEmailAndPassword(user.email, user.password);
      this.router.navigate(['/login']);
    }
  }
}
