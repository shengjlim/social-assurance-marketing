import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmitFormSuccessDialogComponent } from './submit-form-success-dialog.component';

describe('SubmitFormSuccessDialogComponent', () => {
  let component: SubmitFormSuccessDialogComponent;
  let fixture: ComponentFixture<SubmitFormSuccessDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubmitFormSuccessDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmitFormSuccessDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
