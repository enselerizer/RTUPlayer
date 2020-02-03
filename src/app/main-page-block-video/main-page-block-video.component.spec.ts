import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainPageBlockVideoComponent } from './main-page-block-video.component';

describe('MainPageBlockVideoComponent', () => {
  let component: MainPageBlockVideoComponent;
  let fixture: ComponentFixture<MainPageBlockVideoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainPageBlockVideoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainPageBlockVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
