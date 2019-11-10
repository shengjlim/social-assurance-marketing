import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandTrustFormComponent } from './brand-trust-form.component';

describe('BrandTrustFormComponent', () => {
  let component: BrandTrustFormComponent;
  let fixture: ComponentFixture<BrandTrustFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrandTrustFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrandTrustFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
