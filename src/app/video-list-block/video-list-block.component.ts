import { Component, OnInit } from '@angular/core';
import { VgAPI, VgEvents } from 'videogular2/compiled/core';


@Component({
  selector: 'app-video-list-block',
  inputs: ['title', 'video'],
  templateUrl: './video-list-block.component.html',
  styleUrls: ['./video-list-block.component.scss']
})
export class VideoListBlockComponent implements OnInit {

  title: string;
  video: string;


  constructor() { }
  onPlayerReady(api: VgAPI) {
    api.volume = 0;
  }

  ngOnInit() {
  }

}
