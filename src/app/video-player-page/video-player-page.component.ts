import { Component, OnInit } from '@angular/core';
import { VgAPI } from 'videogular2/compiled/core';
import { ActivatedRoute } from '@angular/router';
import { ArchiveService } from '../archive.service';

@Component({
  selector: 'app-video-player-page',
  inputs: ['video'],
  templateUrl: './video-player-page.component.html',
  styleUrls: ['./video-player-page.component.scss']
})
export class VideoPlayerPageComponent implements OnInit {

  video: string;
  configRef: any;

  constructor(private route: ActivatedRoute, private archive : ArchiveService) { }



  onPlayerReady(api: VgAPI) {
    //api.volume = 0;
  }

  ngOnInit() {
    this.configRef = this.archive.get();
    this.video = this.route.snapshot.params.video;
  }

}
