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

  constructor(private _formBuilder: FormBuilder, private db: AngularFirestore, router: Router, public auth: LoginService) {
    if(!auth.authenticated){
      router.navigate(['/']);
    }
  }

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
    const brandTrust = this.firstFormGroup.value as BrandTrust;
    const innovationTrust = this.secondFormGroup.value as InnovationTrust;
    const personalTrust = this.thirdFormGroup.value as PersonalTrust;
    console.log(brandTrust);
    console.log(innovationTrust);
    console.log(personalTrust);

    //TODO: Add admin brandtrust/innovationtrust/personalTrust to Firebase
    this.db.collection('brand').add(brandTrust);
    this.db.collection('innovation').add(innovationTrust);
    this.db.collection('personal').add(personalTrust);
  }
}
