import { Component, OnInit, ElementRef } from '@angular/core';
import { ArchiveService } from '../archive.service';


@Component({
  selector: 'app-video-list-page',
  templateUrl: './video-list-page.component.html',
  styleUrls: ['./video-list-page.component.scss']
})
export class VideoListPageComponent implements OnInit {

  configRef: any;

  constructor(private archive : ArchiveService, private _elementRef: ElementRef) { }

  ngOnInit() {
    this.configRef = this.archive.get();
    this._elementRef.nativeElement.style.setProperty('--grid-size', this.configRef.videosPage.gridSize);
  }

}
