import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BrandTrust } from 'src/app/models/brand-trust';
import { InnovationTrust } from 'src/app/models/innovation-trust';
import { PersonalTrust } from 'src/app/models/personal-trust';

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

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      associations: ['', Validators.required],
      incitingIncidents: ['', Validators.required],
      conflict: ['', Validators.required],
      callToAction: ['', Validators.required],
      vision: ['', Validators.required],
    });
    this.secondFormGroup = this._formBuilder.group({
      relativeTrust: ['', Validators.required],
      userExperience: ['', Validators.required],
      promise: ['', Validators.required],
      socialProof: ['', Validators.required],
    });
    this.thirdFormGroup = this._formBuilder.group({
      connection: ['', Validators.required],
      control: ['', Validators.required],
      consistency: ['', Validators.required],
      commitment: ['', Validators.required],
      coCreation: ['', Validators.required],
    });
  }

  onSubmit() {
    const brandTrust = this.firstFormGroup.value as BrandTrust;
    const innovationTrust = this.secondFormGroup.value as InnovationTrust;
    const personalTrust = this.thirdFormGroup.value as PersonalTrust;
    console.log(brandTrust);
    console.log(innovationTrust);
    console.log(personalTrust);
  }
}
