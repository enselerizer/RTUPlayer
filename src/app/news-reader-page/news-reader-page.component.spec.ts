import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsReaderPageComponent } from './news-reader-page.component';

describe('NewsReaderPageComponent', () => {
  let component: NewsReaderPageComponent;
  let fixture: ComponentFixture<NewsReaderPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsReaderPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsReaderPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
