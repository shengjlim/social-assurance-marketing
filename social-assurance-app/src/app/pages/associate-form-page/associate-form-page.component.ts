import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { PersonalTrust } from 'src/app/models/personal-trust';
import { AngularFirestore } from '@angular/fire/firestore';
import { LoginService } from '../../services/login-service.service';
import { Router } from '@angular/router';

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

  constructor(private _formBuilder: FormBuilder, private db: AngularFirestore, public auth: LoginService, private router: Router) { }

  ngOnInit() {
    //this.getEmailAndGroupId(this.router.url);
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
    this.db.collection('brand', ref=> ref.where("groupId", "==", "other")).get().subscribe((data) => {
      this.firstFormGroup.setValue({
        associations: data.docs[0].data().associations,
        incitingIncidents: data.docs[0].data().incitingIncidents,
        conflict: data.docs[0].data().conflict,
        callToAction: data.docs[0].data().callToAction,
        vision: data.docs[0].data().vision
      });
    });

    // Set the innovation values for this groupId
    this.db.collection('innovation', ref=> ref.where("groupId", "==", "other")).get().subscribe((data) => {
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

    this.db.collection('personal').add(personalTrust)
  }

  getEmailAndGroupId(string) {
    let parameters = string.split(";");
    this.id = parameters[1].slice(3);
    this.email = parameters[2].slice(6);
  }

}
