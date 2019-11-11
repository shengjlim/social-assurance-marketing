import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';


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
