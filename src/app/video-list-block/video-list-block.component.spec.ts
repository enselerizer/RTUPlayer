import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoListBlockComponent } from './video-list-block.component';

describe('VideoListBlockComponent', () => {
  let component: VideoListBlockComponent;
  let fixture: ComponentFixture<VideoListBlockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoListBlockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoListBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
