import { Component, OnInit } from '@angular/core';
import { FormInfoService } from 'src/app/services/form-info.service';
import { FormControl, Validators } from '@angular/forms';
import { InnovationTrust } from 'src/app/models/innovation-trust';

@Component({
  selector: 'innovation-trust-form',
  templateUrl: './innovation-trust-form.component.html',
  styleUrls: ['./innovation-trust-form.component.css']
})
export class InnovationTrustFormComponent implements OnInit {

  constructor(
    private formInfoService: FormInfoService,
  ) { }

  ngOnInit() {
  }

  relativeTrust = new FormControl('', Validators.required);
  userExperience = new FormControl('', Validators.required);
  promise = new FormControl('', Validators.required);
  socialProof = new FormControl('', Validators.required);

  addInnovationTrust() {
    const innovationTrust = new InnovationTrust(
      this.relativeTrust.value,
      this.userExperience.value,
      this.promise.value,
      this.socialProof.value
    )
    this.formInfoService.innovationTrust = innovationTrust;
  }
}
