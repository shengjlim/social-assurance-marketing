import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Guid } from "guid-typescript";
import { User } from '../../models/user';
import { MatDialog } from '@angular/material/dialog';
import { CreateAccountSuccessDialogComponent } from 'src/app/components/create-account-success-dialog/create-account-success-dialog.component';
import { AngularFireAuth } from '@angular/fire/auth';
import { Group } from 'src/app/models/group';
import { AngularFirestore } from '@angular/fire/firestore';
import { LoginService } from 'src/app/services/login-service.service';

@Component({
  selector: 'app-create-account-page',
  templateUrl: './create-account-page.component.html',
  styleUrls: ['./create-account-page.component.css']
})
export class CreateAccountPageComponent implements OnInit {

  public newAccountForm: FormGroup;
  public groupId: string;

  constructor(private firebase: AngularFireAuth, private router: Router, public dialog: MatDialog, private loginService: LoginService) { }

  ngOnInit() {
    this.newAccountForm = new FormGroup({
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      passwordConfirmation: new FormControl('', Validators.required),
      conferenceName: new FormControl('', Validators.required)
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
      this.openSuccessDialog(this.groupId);
      this.firebase.auth.createUserWithEmailAndPassword(this.newAccountForm.value.email, this.newAccountForm.value.password).then(result => {
        const group = new Group(this.groupId, result.user.uid, this.newAccountForm.value.conferenceName, new Date());
        this.loginService.addGroup(group);
      });
      this.router.navigate(['/login']);
    }
  }

  backToLogin(): void {
    this.router.navigate(['/login']);
  }

  openSuccessDialog(id): void {
    const dialogRef = this.dialog.open(CreateAccountSuccessDialogComponent, {
      width: '250px',
      data: { id: id }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
