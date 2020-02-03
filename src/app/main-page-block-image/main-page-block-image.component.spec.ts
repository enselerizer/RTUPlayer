import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainPageBlockImageComponent } from './main-page-block-image.component';

describe('MainPageBlockImageComponent', () => {
  let component: MainPageBlockImageComponent;
  let fixture: ComponentFixture<MainPageBlockImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainPageBlockImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainPageBlockImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
