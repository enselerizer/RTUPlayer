import { Component, OnInit, ViewChild } from '@angular/core';
import { PlatformLocation } from '@angular/common';
import { UnityCallbackProxyService } from '../unity-callback-proxy.service';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { ArchiveService } from '../archive.service';

@Component({
  selector: 'app-game-page',
  templateUrl: './game-page.component.html',
  styleUrls: ['./game-page.component.scss']
})
export class GamePageComponent implements OnInit {
  @ViewChild('unityView', {static: false}) unityView;
  baseUrl: string;
  project: string;
  subscription: Subscription;
  configRef: any;

  constructor(platformLocation: PlatformLocation, private unityCallbackProxyService: UnityCallbackProxyService, private route: ActivatedRoute, private archive: ArchiveService) {
    const location = (platformLocation as any).location;
    this.baseUrl = location.origin + location.pathname.replace('index.html', '');
    console.log('baseUrl', this.baseUrl);

    this.subscription = unityCallbackProxyService.messageSent$.subscribe(
      (msg) => {
        this.send('Main Camera', 'ReceiveMessageFromWeb', msg);
    });
  }

  ngOnInit() {
    this.configRef = this.archive.get();
    setTimeout(() => {
      this.load(this.route.snapshot.params.id);
    }, 100);
  }

  load(id: number) {
    console.log(id);
    let name = this.configRef.gamesPage.items.find(e => e.id == id).game;


    this.project = name;
    this.unityView.loadProject(`assets/${this.configRef.contentPath + this.configRef.gamesPage.basePath + name}/game.json`);


  }

  send(objectName: string, methodName: string, messageValue: string) {
    this.unityView.sendMessageToUnity(objectName, methodName, messageValue);
  }

}
