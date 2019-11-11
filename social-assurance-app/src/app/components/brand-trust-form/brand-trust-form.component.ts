import { Component, OnInit, Input } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { FormInfoService } from '../../services/form-info.service';
import { BrandTrust } from 'src/app/models/brand-trust';

@Component({
  selector: 'brand-trust-form',
  templateUrl: './brand-trust-form.component.html',
  styleUrls: ['./brand-trust-form.component.css']
})
export class BrandTrustFormComponent implements OnInit {
  @Input() form: FormGroup

  constructor(
  ) { }

  ngOnInit() {
  }
}
