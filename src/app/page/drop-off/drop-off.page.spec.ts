import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DropOffPage } from './drop-off.page';

describe('DropOffPage', () => {
  let component: DropOffPage;
  let fixture: ComponentFixture<DropOffPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DropOffPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DropOffPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
