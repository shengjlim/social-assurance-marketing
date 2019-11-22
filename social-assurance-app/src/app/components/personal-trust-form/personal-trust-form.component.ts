import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';


@Component({
  selector: 'personal-trust-form',
  templateUrl: './personal-trust-form.component.html',
  styleUrls: ['./personal-trust-form.component.css']
})
export class PersonalTrustFormComponent implements OnInit {

  @Input() form: FormGroup

  constructor(
  ) { }

  ngOnInit() {
  }
}
