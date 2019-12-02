import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { BrandTrust } from 'src/app/models/brand-trust';
import { InnovationTrust } from 'src/app/models/innovation-trust';
import { PersonalTrust } from 'src/app/models/personal-trust';
import { AngularFirestore } from '@angular/fire/firestore';
import { FirebaseAuth } from '@angular/fire';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { LoginService } from '../../services/login-service.service';
import { FormInfoService } from 'src/app/services/form-info.service';
import { MatDialog } from '@angular/material';
import { SubmitFormSuccessDialogComponent } from 'src/app/components/submit-form-success-dialog/submit-form-success-dialog.component';

@Component({
  selector: 'app-admin-form-page',
  templateUrl: './admin-form-page.component.html',
  styleUrls: ['./admin-form-page.component.css']
})
export class AdminFormPageComponent implements OnInit {

  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;

  constructor(private _formBuilder: FormBuilder, private router: Router, public auth: LoginService, private formService : FormInfoService, public dialog: MatDialog) {
    if(!auth.authenticated){
      this.router.navigate(['/']);
    }
  }

  ngOnInit() {
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
  }

  onSubmit() {
    let brandTrust = this.firstFormGroup.value as BrandTrust;
    let innovationTrust = this.secondFormGroup.value as InnovationTrust;
    let personalTrust = this.thirdFormGroup.value as PersonalTrust;  
    
    brandTrust.groupId = this.auth.groupId;
    innovationTrust.groupId = this.auth.groupId;
    personalTrust.groupId = this.auth.groupId;

    // Set the personal trust email
    personalTrust.email = this.auth.currentUser.user.email;

    this.formService.putBrandTrustObject(brandTrust);
    this.formService.putInnovationTrustObject(innovationTrust);
    this.formService.putPersonalTrustObject(personalTrust);

    this.openSuccessDialog();
    
    this.router.navigate(['landing']);
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
