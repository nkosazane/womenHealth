import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoTutorialsPage } from './video-tutorials.page';

describe('VideoTutorialsPage', () => {
  let component: VideoTutorialsPage;
  let fixture: ComponentFixture<VideoTutorialsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoTutorialsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoTutorialsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
