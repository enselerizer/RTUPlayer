import { Component, OnInit } from '@angular/core';
import { VgAPI, VgEvents } from 'videogular2/compiled/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-main-page-block-video',
  templateUrl: './main-page-block-video.component.html',
  styleUrls: ['./main-page-block-video.component.scss'],
  animations: [
    trigger('initLoad', [
      transition('void => *', [
        style({ transform: 'scale(0,0)' }),
        animate('800ms 400ms ease', style({ transform: 'scale(1,1)' }))
      ]),
    ])
    ]
})
export class MainPageBlockVideoComponent implements OnInit {

  initLoad = 'hide';


  constructor() { }

  onPlayerReady(api: VgAPI) {
    api.volume = 0;
  }



  ngOnInit() {
    this.initLoad = 'show';
  }

}
