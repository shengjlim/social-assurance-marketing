import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-create-account-success-dialog',
  templateUrl: './create-account-success-dialog.component.html',
  styleUrls: ['./create-account-success-dialog.component.css']
})
export class CreateAccountSuccessDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<CreateAccountSuccessDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { id: string }) { }

  ngOnInit() {
    console.log(this.data.id);
  }

  copy(): void {
    this.dialogRef.close();
  }
}
