import { Component, OnInit } from '@angular/core';
import { ArchiveService } from '../archive.service';

@Component({
  inputs: ['title', 'image', 'link'],
  selector: 'app-image-list-block',
  templateUrl: './image-list-block.component.html',
  styleUrls: ['./image-list-block.component.scss']
})
export class ImageListBlockComponent implements OnInit {

  title: string;
  image: string;
  link: any;
  configRef: any;


  constructor(private archive : ArchiveService) { }

  ngOnInit() {
    this.configRef = this.archive.get();
  }

}
