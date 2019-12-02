import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-submit-form-success-dialog',
  templateUrl: './submit-form-success-dialog.component.html',
  styleUrls: ['./submit-form-success-dialog.component.css']
})
export class SubmitFormSuccessDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<SubmitFormSuccessDialogComponent>) { }

  ngOnInit() {
    
  }

  copy(): void {
    this.dialogRef.close();
  }
}
