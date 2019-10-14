import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatForum2Page } from './chat-forum2.page';

describe('ChatForum2Page', () => {
  let component: ChatForum2Page;
  let fixture: ComponentFixture<ChatForum2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatForum2Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatForum2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
