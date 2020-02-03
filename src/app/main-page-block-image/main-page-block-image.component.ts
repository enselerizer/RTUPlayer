import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-main-page-block-image',
  inputs: ['title', 'image', 'blur', 'brightness'],
  templateUrl: './main-page-block-image.component.html',
  styleUrls: ['./main-page-block-image.component.scss'],
  animations: [
  trigger('initLoad', [
    transition('void => *', [
      style({ transform: 'scale(0,0)' }),
      animate('600ms 400ms ease', style({ transform: 'scale(1,1)' }))
    ]),
  ])
  ]
})
export class MainPageBlockImageComponent implements OnInit {

  title: string;
  image: string;
  blur: number;
  brightness: number;
  initLoad = 'hide';

  constructor() { }

  ngOnInit() {
    this.initLoad = 'show';
  }



}
