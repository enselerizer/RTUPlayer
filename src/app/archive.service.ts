import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArchiveService {

  public static configRef: any;
  public static configLoader: Observable<any>;
  public static isConfigLoaded: boolean;

  configProto = {
    "contentPath": "content/",
    "videosPage": {
      "basePath": "videos/",
      "videos": [
        {
          "title": "День Открытых Дверей",
          "video": "video1.mp4"
        }
      ]
    }
  };

  constructor(private httpClient: HttpClient) {
    ArchiveService.isConfigLoaded = false;
    ArchiveService.configRef = this.configProto;
    ArchiveService.configLoader = this.httpClient.get('assets/config.json');
    ArchiveService.configLoader.subscribe(val => {
      ArchiveService.configRef = val;
      ArchiveService.isConfigLoaded = true;
    });
  }


  public get():any {
    return ArchiveService.configRef;
  }


}


