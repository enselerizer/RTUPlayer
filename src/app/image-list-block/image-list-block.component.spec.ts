import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageListBlockComponent } from './image-list-block.component';

describe('ImageListBlockComponent', () => {
  let component: ImageListBlockComponent;
  let fixture: ComponentFixture<ImageListBlockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImageListBlockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageListBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
