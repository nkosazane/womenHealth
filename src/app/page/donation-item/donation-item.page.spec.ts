import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DonationItemPage } from './donation-item.page';

describe('DonationItemPage', () => {
  let component: DonationItemPage;
  let fixture: ComponentFixture<DonationItemPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DonationItemPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DonationItemPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
