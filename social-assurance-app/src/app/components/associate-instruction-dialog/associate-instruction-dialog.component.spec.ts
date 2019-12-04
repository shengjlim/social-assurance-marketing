import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssociateInstructionDialogComponent } from './associate-instruction-dialog.component';

describe('AssociateInstructionDialogComponent', () => {
  let component: AssociateInstructionDialogComponent;
  let fixture: ComponentFixture<AssociateInstructionDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssociateInstructionDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssociateInstructionDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
