import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArchiveService } from '../archive.service';

@Component({
  selector: 'app-news-reader-page',
  templateUrl: './news-reader-page.component.html',
  styleUrls: ['./news-reader-page.component.scss']
})
export class NewsReaderPageComponent implements OnInit {

  id: number;
  title: string;
  body: string;
  images: string[];
  currentImage: number;
  date: string;
  configRef: any;

  constructor(private route: ActivatedRoute, private archive : ArchiveService) { }

  ngOnInit() {


    this.configRef = this.archive.get();
    this.id = this.route.snapshot.params.id;
    console.log(this.id);

    let newItem = this.configRef.newsPage.items.find(e => e.id == this.id);
    console.log(this.configRef);
    console.log(newItem);

    this.title = newItem.title;
    this.images = newItem.images;
    this.date = newItem.date;
    this.body = newItem.body;
    this.currentImage = 0;

  }

  prevImage() {
    if(this.currentImage == 0) {
      this.currentImage = this.images.length - 1;
    } else {
      this.currentImage--;
    }
    console.log("new currImage is " + this.currentImage.toString());
  }

  nextImage() {
    if(this.currentImage == this.images.length - 1) {
      this.currentImage = 0;
    } else {
      this.currentImage++;
    }
    console.log("new currImage is " + this.currentImage.toString());

  }
}
