import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LoginService } from 'src/app/services/login-service.service';
import { Router } from '@angular/router';
import { Guid } from "guid-typescript";
import { User } from '../../models/user';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CreateAccountSuccessDialogComponent } from 'src/app/components/create-account-success-dialog/create-account-success-dialog.component';

@Component({
  selector: 'app-create-account-page',
  templateUrl: './create-account-page.component.html',
  styleUrls: ['./create-account-page.component.css']
})
export class CreateAccountPageComponent implements OnInit {

  public newAccountForm: FormGroup;
  public groupId: string;

  constructor(public auth: LoginService, private router: Router, public dialog: MatDialog) { }

  ngOnInit() {
    this.newAccountForm = new FormGroup({
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      passwordConfirmation: new FormControl('', Validators.required),
    });
  }

  createAccount(): void {
    // if (this.newAccountForm.value.email === "" || this.newAccountForm.value.password === "" || this.newAccountForm.value.passwordConfirmation === "") {
    //   window.alert("All fields are required.")
    // }
    // else if (this.newAccountForm.value.password !== this.newAccountForm.value.passwordConfirmation) {
    //   window.alert("The passwords don't match.")
    // }
    // else {
    this.groupId = Guid.raw();
    const user = new User(this.newAccountForm.value.email, this.newAccountForm.value.password, this.groupId);
    console.log(user);
    this.openSuccessDialog();
    // TODO: Add Account to fireBase
    //  this.router.navigate(['/login']);
    // }
  }

  openSuccessDialog(): void {
    const dialogRef = this.dialog.open(CreateAccountSuccessDialogComponent, {
      width: '250px',
      // data: {name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // this.animal = result;
    });
  }
}
