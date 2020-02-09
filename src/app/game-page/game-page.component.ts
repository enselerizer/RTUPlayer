import { Component, OnInit, ViewChild } from '@angular/core';
import { PlatformLocation } from '@angular/common';
import { UnityCallbackProxyService } from '../unity-callback-proxy.service';
import { Subscription } from 'rxjs';

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

  constructor(platformLocation: PlatformLocation, private unityCallbackProxyService: UnityCallbackProxyService) {
    const location = (platformLocation as any).location;
    this.baseUrl = location.origin + location.pathname.replace('index.html', '');
    console.log('baseUrl', this.baseUrl);

    this.subscription = unityCallbackProxyService.messageSent$.subscribe(
      (msg) => {
        this.send('Main Camera', 'ReceiveMessageFromWeb', msg);
    });
  }

  ngOnInit() {
    setTimeout(() => {
      this.load('game1');
    }, 100);


  }

  load(name: string) {
    this.project = name;
    this.unityView.loadProject(`assets/games/${name}/game.json`);
  }

  send(objectName: string, methodName: string, messageValue: string) {
    this.unityView.sendMessageToUnity(objectName, methodName, messageValue);
  }

}
