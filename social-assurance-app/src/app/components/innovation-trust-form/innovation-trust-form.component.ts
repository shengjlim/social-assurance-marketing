import { Component, OnInit, Input } from '@angular/core';
import { FormInfoService } from 'src/app/services/form-info.service';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { InnovationTrust } from 'src/app/models/innovation-trust';

@Component({
  selector: 'innovation-trust-form',
  templateUrl: './innovation-trust-form.component.html',
  styleUrls: ['./innovation-trust-form.component.css']
})
export class InnovationTrustFormComponent implements OnInit {

  @Input() form: FormGroup

  constructor() { }

  ngOnInit() {
  }
}
