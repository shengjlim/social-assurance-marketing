import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewEntriesPageComponent } from './view-entries-page.component';

describe('ViewEntriesPageComponent', () => {
  let component: ViewEntriesPageComponent;
  let fixture: ComponentFixture<ViewEntriesPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewEntriesPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewEntriesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
