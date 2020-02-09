import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoPlayerPageComponent } from './video-player-page.component';

describe('VideoPlayerPageComponent', () => {
  let component: VideoPlayerPageComponent;
  let fixture: ComponentFixture<VideoPlayerPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoPlayerPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoPlayerPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
