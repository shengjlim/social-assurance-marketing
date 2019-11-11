import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalTrustFormComponent } from './personal-trust-form.component';

describe('PersonalTrustFormComponent', () => {
  let component: PersonalTrustFormComponent;
  let fixture: ComponentFixture<PersonalTrustFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonalTrustFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalTrustFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
