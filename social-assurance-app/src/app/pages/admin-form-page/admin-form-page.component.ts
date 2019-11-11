import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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
    console.log(this.firstFormGroup.value);
    console.log(this.secondFormGroup.value);
    console.log(this.thirdFormGroup.value);

  }
}
