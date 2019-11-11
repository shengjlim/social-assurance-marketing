import { Component, OnInit } from '@angular/core';
import { FormInfoService } from 'src/app/services/form-info.service';
import { FormControl, Validators } from '@angular/forms';
import { PersonalTrust } from 'src/app/models/personal-trust';

@Component({
  selector: 'personal-trust-form',
  templateUrl: './personal-trust-form.component.html',
  styleUrls: ['./personal-trust-form.component.css']
})
export class PersonalTrustFormComponent implements OnInit {

  constructor(
    public formInfoService: FormInfoService,
  ) { }

  ngOnInit() {
  }

  connection = new FormControl('', Validators.required);
  control = new FormControl('', Validators.required);
  consistency = new FormControl('', Validators.required);
  commitment = new FormControl('', Validators.required);
  coCreation = new FormControl('', Validators.required);

  onSubmit() {
    const personalTrust = new PersonalTrust(
      this.connection.value,
      this.control.value,
      this.consistency.value,
      this.commitment.value,
      this.coCreation.value
    )
    this.formInfoService.personalTrust = personalTrust
    // console.log(this.formInfoService.brandTrust);
    // console.log(this.formInfoService.innovationTrust);
    // console.log(this.formInfoService.personalTrust);
  }
}
