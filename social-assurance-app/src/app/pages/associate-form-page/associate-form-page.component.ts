import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { PersonalTrust } from 'src/app/models/personal-trust';
import { AngularFirestore } from '@angular/fire/firestore';
import { LoginService } from '../../services/login-service.service';
import { Router } from '@angular/router';
import { TrustService } from 'src/app/services/trust.service';
import { FormInfoService } from 'src/app/services/form-info.service';
import { SubmitFormSuccessDialogComponent } from 'src/app/components/submit-form-success-dialog/submit-form-success-dialog.component';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-associate-form-page',
  templateUrl: './associate-form-page.component.html',
  styleUrls: ['./associate-form-page.component.css']
})
export class AssociateFormPageComponent implements OnInit {

  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  id: string;
  email: string;

  constructor(private _formBuilder: FormBuilder, public auth: LoginService, private router: Router, private ts : TrustService, private fi: FormInfoService, public dialog: MatDialog) { }

  ngOnInit() {
    this.email = this.auth.getAssociateEmail();
    this.id = this.auth.getGroupId(); //this.auth.getGroupId();

    if(this.id === null || this.email === null){
      this.router.navigate(['associateLogin']);
    }
    
    this.firstFormGroup = this._formBuilder.group({
      associations: [''],
      incitingIncidents: [''],
      conflict: [''],
      callToAction: [''],
      vision: ['']
    });
    this.secondFormGroup = this._formBuilder.group({
      relativeTrust: [''],
      userExperience: [''],
      promise: [''],
      socialProof: ['']
    });
    this.thirdFormGroup = this._formBuilder.group({
      connection: [''],
      control: [''],
      consistency: [''],
      commitment: [''],
      coCreation: ['']
    });

    // Set the brand values for this groupId
    this.ts.getBrandTrust(this.id).get().subscribe((data) => {
      this.firstFormGroup.setValue({
        associations: data.docs[0].data().associations,
        incitingIncidents: data.docs[0].data().incitingIncidents,
        conflict: data.docs[0].data().conflict,
        callToAction: data.docs[0].data().callToAction,
        vision: data.docs[0].data().vision
      });
    });

    // Set the innovation values for this groupId
    this.ts.getInnovationTrust(this.id).get().subscribe((data) => {
      this.secondFormGroup.setValue({
        promise: data.docs[0].data().promise,
        relativeTrust: data.docs[0].data().relativeTrust,
        socialProof: data.docs[0].data().socialProof,
        userExperience: data.docs[0].data().userExperience
      });
    });
  }

  onSubmit() {
    let personalTrust = this.thirdFormGroup.value as PersonalTrust;

    // Setting the email and groupId of the associate
    personalTrust.email = this.email;
    personalTrust.groupId = this.id;

    this.fi.putPersonalTrustObject(personalTrust);

    this.openSuccessDialog();
    // TODO: Also send email with their results

    this.router.navigate(['asssociateLogin'])
  }

  openSuccessDialog(): void {
    const dialogRef = this.dialog.open(SubmitFormSuccessDialogComponent, {
      width: '250px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
