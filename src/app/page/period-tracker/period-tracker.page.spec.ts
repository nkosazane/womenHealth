import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeriodTrackerPage } from './period-tracker.page';

describe('PeriodTrackerPage', () => {
  let component: PeriodTrackerPage;
  let fixture: ComponentFixture<PeriodTrackerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeriodTrackerPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeriodTrackerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
