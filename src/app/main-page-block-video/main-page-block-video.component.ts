import { Component, OnInit } from '@angular/core';
import { VgAPI, VgEvents } from 'videogular2/compiled/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';
import { blockAnimations } from '../animations';
import { ArchiveService } from '../archive.service';

@Component({
  selector: 'app-main-page-block-video',
  inputs: ['link'],
  templateUrl: './main-page-block-video.component.html',
  styleUrls: ['./main-page-block-video.component.scss'],
  animations: blockAnimations
})
export class MainPageBlockVideoComponent implements OnInit {

  block = 'hide';
  link: string;
  configRef: any;
  videos: string[3];

  constructor(private archive : ArchiveService) { }

  onPlayerReady(api: VgAPI) {
    api.volume = 0;
  }

  ngOnInit() {
    this.block = 'show';
    this.configRef = this.archive.get();
    this.videos = this.configRef.mainPage.videos;
  }

}
