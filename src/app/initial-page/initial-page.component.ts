import { Component, OnInit } from '@angular/core';
import { ArchiveService } from '../archive.service';

@Component({
  selector: 'app-initial-page',
  templateUrl: './initial-page.component.html',
  styleUrls: ['./initial-page.component.scss']
})
export class InitialPageComponent implements OnInit {

  constructor(private archive : ArchiveService) { }

  loaded = false;


  ngOnInit() {
    ArchiveService.configLoader.subscribe((val) => {
      this.loaded = true;
    });
  }

}
