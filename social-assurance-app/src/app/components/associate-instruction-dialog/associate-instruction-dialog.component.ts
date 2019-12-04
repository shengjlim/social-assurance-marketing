import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-associate-instruction-dialog',
  templateUrl: './associate-instruction-dialog.component.html',
  styleUrls: ['./associate-instruction-dialog.component.css']
})
export class AssociateInstructionDialogComponent implements OnInit {

  constructor(public dialog: MatDialog, public dialogRef: MatDialogRef<AssociateInstructionDialogComponent>, ) { }

  ngOnInit() {
  }

  close() {
    this.dialogRef.close();
  }

}
