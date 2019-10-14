import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatForum1Page } from './chat-forum1.page';

describe('ChatForum1Page', () => {
  let component: ChatForum1Page;
  let fixture: ComponentFixture<ChatForum1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatForum1Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatForum1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
