import { Component, OnInit, ElementRef } from '@angular/core';
import { ArchiveService } from '../archive.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-image-list-page',
  templateUrl: './image-list-page.component.html',
  styleUrls: ['./image-list-page.component.scss']
})
export class ImageListPageComponent implements OnInit {

  configRef: any;
  page: string;

  constructor(private route: ActivatedRoute, private archive : ArchiveService, private _elementRef: ElementRef) { }

  ngOnInit() {
    this.configRef = this.archive.get();
    this.page = this.route.snapshot.params.page;
    if(this.page == 'news') {
      this._elementRef.nativeElement.style.setProperty('--grid-size', this.configRef.newsPage.gridSize);
    }
    if(this.page == 'games') {
      this._elementRef.nativeElement.style.setProperty('--grid-size', this.configRef.gamesPage.gridSize);
    }

  }

}
