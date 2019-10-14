import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaypalwebPage } from './paypalweb.page';

describe('PaypalwebPage', () => {
  let component: PaypalwebPage;
  let fixture: ComponentFixture<PaypalwebPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaypalwebPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaypalwebPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
