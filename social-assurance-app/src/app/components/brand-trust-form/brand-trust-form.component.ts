import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';


@Component({
  selector: 'brand-trust-form',
  templateUrl: './brand-trust-form.component.html',
  styleUrls: ['./brand-trust-form.component.css']
})
export class BrandTrustFormComponent implements OnInit {
  @Input() form: FormGroup
  @Input() readOnly: Boolean

  associationsPlaceHolder: String;
  incidentsPlaceholder: String;
  conflictPlaceHolder: String;
  actionPlaceholder: String;
  visionPlaceHolder: String;

  constructor(
  ) { }

  ngOnInit() {
    if (this.readOnly) {
      this.setPlaceholderText();
    }
  }

  setPlaceholderText() {
    //TODO: Set the text from the admin to the placeholders
    // this.assoctationsPlaceholder = this.apiServiceCallThingy.getAssociation;
  }

}
