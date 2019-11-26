import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAccountSuccessDialogComponent } from './create-account-success-dialog.component';

describe('CreateAccountSuccessDialogComponent', () => {
  let component: CreateAccountSuccessDialogComponent;
  let fixture: ComponentFixture<CreateAccountSuccessDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateAccountSuccessDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateAccountSuccessDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
