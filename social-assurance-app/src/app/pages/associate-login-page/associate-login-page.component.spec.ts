import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssociateLoginPageComponent } from './associate-login-page.component';

describe('AssociateLoginPageComponent', () => {
  let component: AssociateLoginPageComponent;
  let fixture: ComponentFixture<AssociateLoginPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssociateLoginPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssociateLoginPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
