import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';
import { blockAnimations } from '../animations';

@Component({
  selector: 'app-main-page-block-image',
  inputs: ['title', 'image', 'blur', 'brightness', 'link'],
  templateUrl: './main-page-block-image.component.html',
  styleUrls: ['./main-page-block-image.component.scss'],
  animations: blockAnimations
})
export class MainPageBlockImageComponent implements OnInit {

  title: string;
  image: string;
  blur: number;
  brightness: number;
  block = 'hide';
  link: string;

  constructor() { }

  ngOnInit() {
    this.block = 'show';
  }



}
