import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PariodTrackerPage } from './pariod-tracker.page';

describe('PariodTrackerPage', () => {
  let component: PariodTrackerPage;
  let fixture: ComponentFixture<PariodTrackerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PariodTrackerPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PariodTrackerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
