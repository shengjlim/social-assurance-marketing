import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'innovation-trust-form',
  templateUrl: './innovation-trust-form.component.html',
  styleUrls: ['./innovation-trust-form.component.css']
})
export class InnovationTrustFormComponent implements OnInit {

  @Input() form: FormGroup
  @Input() readOnly: Boolean

  trustPlaceholder: string;
  userPlaceholder: string;
  promisePlaceholder: string;
  socialProofPlaceholder: string;

  constructor() { }

  ngOnInit() {
    if (this.readOnly) {
      this.setPlaceholderText();
    }
  }

  setPlaceholderText(): void {
    //TODO: Set the text from the admin to the placeholders
    // this.trustPlaceholder = this.apiServiceCallThingy.getAssociation;
  }
}
