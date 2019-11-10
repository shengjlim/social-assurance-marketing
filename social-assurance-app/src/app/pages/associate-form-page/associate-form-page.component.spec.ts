import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssociateFormPageComponent } from './associate-form-page.component';

describe('AssociateFormPageComponent', () => {
  let component: AssociateFormPageComponent;
  let fixture: ComponentFixture<AssociateFormPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssociateFormPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssociateFormPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
