import { Component, OnInit } from '@angular/core';
import { VgAPI } from 'videogular2/compiled/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-video-player-page',
  inputs: ['video'],
  templateUrl: './video-player-page.component.html',
  styleUrls: ['./video-player-page.component.scss']
})
export class VideoPlayerPageComponent implements OnInit {

  video: string;

  constructor(private route: ActivatedRoute) { }

  onPlayerReady(api: VgAPI) {
    //api.volume = 0;
  }

  ngOnInit() {
    this.video = this.route.snapshot.params.video;
  }

}
