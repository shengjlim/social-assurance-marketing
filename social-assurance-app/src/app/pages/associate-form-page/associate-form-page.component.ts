import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { PersonalTrust } from 'src/app/models/personal-trust';
import { AngularFirestore } from '@angular/fire/firestore';
import { LoginService } from '../../services/login-service.service';

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

  constructor(private _formBuilder: FormBuilder, private db: AngularFirestore, public auth: LoginService) { }

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
    let personalTrust = this.thirdFormGroup.value as PersonalTrust;

    // Setting the email and groupId of the associate
    personalTrust.email = this.auth.currentUser.user.email;
    personalTrust.groupId = '' // TODO: Set the groupId

    this.db.collection('personal').add(personalTrust)
  }

}
