import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminFormPageComponent } from './admin-form-page.component';

describe('AdminFormPageComponent', () => {
  let component: AdminFormPageComponent;
  let fixture: ComponentFixture<AdminFormPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminFormPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminFormPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
