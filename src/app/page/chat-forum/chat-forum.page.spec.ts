import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatForumPage } from './chat-forum.page';

describe('ChatForumPage', () => {
  let component: ChatForumPage;
  let fixture: ComponentFixture<ChatForumPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatForumPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatForumPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
