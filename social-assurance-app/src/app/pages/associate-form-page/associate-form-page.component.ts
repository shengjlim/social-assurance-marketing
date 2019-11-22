import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { PersonalTrust } from 'src/app/models/personal-trust';

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

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      associations: [''],
      incitingIncidents: [''],
      conflict: [''],
      callToAction: [''],
      vision: [''],
    });
    this.secondFormGroup = this._formBuilder.group({
      relativeTrust: [''],
      userExperience: [''],
      promise: [''],
      socialProof: [''],
    });
    this.thirdFormGroup = this._formBuilder.group({
      connection: [''],
      control: [''],
      consistency: [''],
      commitment: [''],
      coCreation: [''],
    });
  }

  onSubmit() {
    const personalTrust = this.thirdFormGroup.value as PersonalTrust;
    console.log(personalTrust);

    // TODO: Add associate personal trust to firebase
  }

}
