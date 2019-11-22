import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InnovationTrustFormComponent } from './innovation-trust-form.component';

describe('InnovationTrustFormComponent', () => {
  let component: InnovationTrustFormComponent;
  let fixture: ComponentFixture<InnovationTrustFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InnovationTrustFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InnovationTrustFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
