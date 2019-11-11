import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { FormInfoService } from '../../services/form-info.service';
import { BrandTrust } from 'src/app/models/brand-trust';

@Component({
  selector: 'brand-trust-form',
  templateUrl: './brand-trust-form.component.html',
  styleUrls: ['./brand-trust-form.component.css']
})
export class BrandTrustFormComponent implements OnInit {

  constructor(
    private formInfoService: FormInfoService
  ) { }

  ngOnInit() {
  }

  associations = new FormControl('', Validators.required);
  incitingIncidents = new FormControl('', Validators.required);
  conflict = new FormControl('', Validators.required);
  callToAction = new FormControl('', Validators.required);
  vision = new FormControl('', Validators.required);

  addBrandTrust() {
    const brandTrust = new BrandTrust(
      this.associations.value,
      this.incitingIncidents.value,
      this.conflict.value,
      this.callToAction.value,
      this.vision.value
    );
    this.formInfoService.brandTrust = brandTrust;
  }

}
